import sys
import json

"""Small programm checking (language-)json-files to detect inconistencies
run as: 
python check_lang.py language_file1.json language_file2.json language_file3.json etc.
"""


def check_rec(dict1, dict2, pre_key=''):
    """[checks dict1 against dict2 recurisveley]
    
    Arguments:
        dict1 {dict} -- [primary dict to compare]
        dict2 {dict} -- [dict to be compared against]
    
    Keyword Arguments:
        pre_key {str} -- [key of before iteration to differentiate between different depths] (default: {''})
    
    Returns:
        [dict] -- [dict of all missing key and value pairs]
    """

    # generate dict from all differences of the two dictionaries
    res = {pre_key + k: dict2[k] for k in set(dict2) - set(dict1)}

    for key in dict1.keys():
        #ignore all simple values or keys which have been caught by the previous iteration
        if key not in res and isinstance(dict1[key], dict):
            # append all new inconsitencies
            res.update(check_rec(dict1[key], dict2[key], pre_key + key + '.')) 

    return res


def ckeck_dicts(dicts):
    """compares all given dicts against each other
    
    Arguments:
        dicts {dict} -- [dict of dicts to compare, the key is the dict-name]
    
    Returns:
        [bool] -- [success: True if all keys are filled in all dicts]
    """


    success = True
    for key, dict in dicts.items():
        print(f'-going through {key}')
        rest = dicts.copy()
        del rest[key] # prohibit self checking a file

        for comp_key, compare in rest.items():
            print(f'  - comparing against {comp_key}')

            # check files against each other
            result = check_rec(dict, compare)

            if result != {}:
                success = False
                print(
                    f'    ---> Missing {result} in file {key} (compared against file {comp_key})')

    return success


def main(argv):

    """reads in all languagefiles given as arguments, assembles them to compare.
    """

    if len(argv) < 3:
        print('check_lang.py <file_1> <file_2> <file_3> ...')
        sys.exit()

    lang = {}

    for i in range(len(argv)-1):
        print()
        with open(argv[i+1]) as json_file:
            # assemble all files to key value pairs
            lang[str(argv[i+1])] = json.load(json_file)

    print("Compared files are: ", argv[1:])
    print("Results:")

    if not ckeck_dicts(lang):
        print('Error(s) occurred')
        sys.exit(1)
    else:
        print('Everything ok')


if __name__ == "__main__":
    main(sys.argv)
