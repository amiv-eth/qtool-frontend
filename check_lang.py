import sys


def main(argv):

    if len(argv) < 3 or len(argv) > 4:
        print('check_lang.py <file_1> <file_2>')
        sys.exit()

    file1 = open(argv[1])
    file2 = open(argv[2])
    print("Compared files are: ", argv[1], " and ", argv[2])

    count = 0
    for line in file1:
        line2 = file2.readline()
        count += 1

        if (line.split(':')[0] != line2.split(':')[0]) and len(line.split(':')) > 1 and len(line2.split(':')) > 1:
            print('Error at line ', count, ':')
            print(line.split(':')[0])
            print(line2.split(':')[0])
            sys.exit(2)

    print('Everything ok')


if __name__ == "__main__":
    main(sys.argv)