# Do not modify these lines
__winc_id__ = '49bce82ef9cc475ca3146ee15b0259d0'
__human_name__ = 'functions'

# Add your code after this line
def greet(x):
    print(f'Hello, {x}!')
greet('Bob')
def add(x, y, z):
    sum = x + y + z
    return sum
print(add(5, 3, 2))
def scottish_greet(name: str, isChild: bool):
    if isChild == True:
        print(f'Hello wee {name}!')
    else:
        print(f'Hello {name}!')
scottish_greet('Jamie', False)
scottish_greet('Jamie', True)
def positive(x):
    if x < 0:
        return False
    elif x == 0:
        return False
    else:
        return True
print(positive(50))
print(positive(-50))
print(positive(0))
def negative(x):
    if x > 0:
        return False
    elif x == 0:
        return False
    else:
        return True
print(negative(50))
print(negative(-50))
print(negative(0))
def sign(x):
    if type(x) == int:
        if x > 0:
            return 1
        elif x == 0:
            return 0
        else:
            return -1
    else:
        return 'This doesn\'t have a sign!'
print(sign(50))
print(sign(-50))
print(sign(0))
print(sign('Bob'))
def nag(name: str, objectName: str, x: int):
    if type(name) == str and type(objectName) == str and type(x) == int:
        dotStr = '.' * x
        nagStr = f'{name}{dotStr} Why can\'t I have a {objectName}?!\n'
        multilineNag = nagStr * x
        return print(multilineNag[:-1])
    else:
        return print(False)
nag('Auntie', 'race car', 2)
nag('Mommy', 'cookie', 5)
nag(2, True, 'Mommy')





    