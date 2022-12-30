import pandas

def main ():
    caster = input('Enter class file name:')
    df = pandas.read_csv(caster, ';', index_col='Name')
    print(df)

if __name__ == '__main__':
    main()

