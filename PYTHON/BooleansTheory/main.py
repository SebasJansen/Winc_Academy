is_raining = True
sun_is_shining = False
team_a_wins = True
team_b_wins = False
print (5 > 4) # True
print (5 < 4) # False
print (3 == 3) # True
print (bool("")) # False
print (bool("hi mom")) # True
print ('===============')
string_a = ''
string_b = 'foo'

# Nothing is printed because an empty string is converted to False
if string_a:
    print("expression results in a truthy value")

# The print line is executed because a non-empty string is converted to True
if string_b:
    print("expression results in a truthy value")

# This is more clear
# The print line is not executed
if string_a != "":
    print('string_a != ""')

# This is more clear
# The print line is executed
if string_b != "":
    print('string_b != ""')
print (True is False)
print (True or False)
print (not True)
print (not False)
# Followed the rule of thumb:
print ('Example' is True)
# Did not follow the rule of thumb:
# 'Example' is 'incorrect'
# Followed the rule of thumb:
print ('Example' == 'correct')