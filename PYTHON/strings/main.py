# Do not modify these lines
__winc_id__ = '71dd124b4a6e4d268f5973db521394ee'
__human_name__ = 'strings'

# Add your code after this line
scorer_one = 'Gullit'
scorer_two = 'Van Basten'
goal_1 = 32
goal_2 = 54
scorers = scorer_one + str(goal_1), scorer_two + str(goal_2)
report = f'{scorer_one} scored in the {goal_1}th minute\n{scorer_two} scored in the {goal_2}th minute'
print (report)
player = 'Rinat Dasayev'
first_name = player[:player.find(' ')]
print (first_name)
last_name_len = player[(player.find(' ')+1):len(player)]
print (last_name_len)
name_short = f'{first_name[:1]}. {last_name_len}'
print (name_short)
chant = f'{first_name}! '*len(first_name)
chant = chant[:-1]
print (chant)
good_chant = chant != ' '
print (good_chant)
