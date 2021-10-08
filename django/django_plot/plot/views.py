from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import CustomFile
import h5py as h5
import numpy as np
import json

def dataQuery(file, mainkey, subkey, num=50000):
    
    data_group = file[mainkey][subkey][:num]
    is_integer = isinstance(data_group[0], (int, np.integer))

    data_json = [{} for i in range(num)]
    data_max_min = {}

    for idx, entry in enumerate(data_json):
        if(is_integer):
            entry[subkey] = int(data_group[idx])
        else:
            entry[subkey] = data_group[idx]

    if(is_integer):
        min_val = 0.7*int(min(data_group))
        max_val = 1.1*int(max(data_group))
    else:
        min_val = 0.7*min(data_group)
        max_val = 1.1*max(data_group)

    if(min_val == 0):
        min_val = -0.2
    if(max_val == 0):
        max_val = 0.2

    if(min_val == max_val):
        data_max_min[subkey] = [min_val - 0.2, max_val + 0.2]
    else:
        data_max_min[subkey] = [min_val, max_val]


    # print(data_json)
    # print(data_max_min)

    return data_json, data_max_min

def grabSubGroup(file, key):
    subgroup = file[key]
    return list(subgroup.keys())

def grabData(first_file, entry, num=150):
    test_file = first_file[entry]
    test_keys = list(test_file.keys())
    test_keys_dtype = []
    for keys in test_keys:
        test_keys_dtype.append(test_file[keys].dtype)
    
    test_list = [{} for i in range(num)]
    max_min = {}

    ### Interlude, entry == 'populationProperties' has a straange property, i.e. most components are length 1, with some, != 1.
    if(entry == 'populationProperties'):
        reduced_keys = []
        plot_keys = []

        for key in test_keys:
            if(test_file[key].shape[0] == 1):
                reduced_keys.append(key)
            else:
                plot_keys.append(key)
        
        for idx, i in enumerate(test_list):
            for key in plot_keys:
                if(key == 'delayTime'):
                    i['log10DelayTime'] = np.log10(test_file[key][idx][0])
                else:
                    i[key] = test_file[key][idx][0]

        for key in plot_keys:
            #min_val = 0.7*min(test_file[key][:num])[0]
            #max_val = 1.1*max(test_file[key][:num])[0]
            if(key == 'delayTime'):
                key = 'log10DelayTime'

            min_val = 0.7*min([test_list[i][key] for i in range(num)])
            max_val = 1.1*max([test_list[i][key] for i in range(num)])

            if(min_val == 0):
                min_val = -0.2
            if(max_val == 0):
                max_val = 0.2
            if(min_val == max_val):
                max_min[key] = [min_val - 0.2, max_val + 0.2]
            else:
                max_min[key] = [min_val, max_val]

        return test_list, max_min

    else:
        if('ID' in test_keys):
            test_keys.remove('ID')

        test_list = [{} for i in range(num)]


        for idx, i in enumerate(test_list):
            for key in test_keys:
                i[key] = test_file[key][idx][0]
        
        max_min = {}

        for key in test_keys:
            min_val = 0.7*min(test_file[key][:num])[0]
            max_val = 1.1*max(test_file[key][:num])[0]

            if(min_val == 0):
                min_val = -0.2
            if(max_val == 0):
                max_val = 0.2
            if(min_val == max_val):
                max_min[key] = [min_val - 0.2, max_val + 0.2]
            elif(max_val < 1):
                max_min[key] = [min_val, max_val]
            else:
                max_min[key] = [min_val, max_val]

    return test_list, max_min

def indexHome(request):

    # first_file = h5.File(CustomFile.objects.first().name, 'r')
    first_file = h5.File(CustomFile.objects.all()[1].name, 'r')

    first_keys = {}
    first_keys['menu'] = list(first_file.keys())

    if('ID' in first_keys['menu']):
        first_keys['menu'].remove('ID')

    print(first_keys)

    file_length = len(first_file[first_keys['menu'][0]])

    if request.method == 'POST':
        print('POST REQ')
        if(request.POST.get('main_group')):
            main_group = request.POST.get('main_group')

            subgroup_list = grabSubGroup(first_file, main_group)
            context = {
                'subgroup_list' : subgroup_list
            }

            return JsonResponse(context)

        if(request.POST.get('data_request')):
            main_group, subgroup = request.POST.getlist('data_request')

            data_json, data_max_min = dataQuery(first_file, main_group, subgroup)

            context = {
                'trunc_data' : data_json,
                'min_max_data': data_max_min
            }

            return JsonResponse(context)
        return

    context = {
        'a' : first_keys,
    }
    return render(request, 'plot/home.html', context)