# Do not modify these lines
__winc_id__ = '25596924dffe436da9034d43d0af6791'
__human_name__ = 'conditions'

# Add your code after this line
def farm_action(factors):
    factors.actions_list = """"""
    factors.actions_count = 0
    if factors.cows_location == 'cowshed':
        take_cows_to_cowshed(factors)
        milk_cows(factors)
        fertilize_pasture(factors)
        mow_grass(factors)
        if factors.actions_list == """""":
            wait(factors)
    else:
        take_cows_to_cowshed(factors)
        milk_cows(factors)
        fertilize_pasture(factors)
        mow_grass(factors)
        take_cows_to_pasture(factors)
        if factors.actions_list == """""":
            wait(factors)
    print(factors.actions_list[:-1])

def take_cows_to_cowshed(factors):
    if factors.cows_location == 'pasture' and factors.time_of_day == 'night' or factors.cows_location == 'pasture' and factors.weather == 'rainy' or factors.cows_location == 'pasture' and factors.cow_milking_status == True:
        factors.actions_list += 'Take cows to cowshed\n'
        factors.cows_location = 'cowshed'
        factors.actions_count += 1
        return
    else: return
def take_cows_to_pasture(factors):
    if factors.cows_location == 'cowshed' and factors.cow_milking_status == False:
        factors.actions_list += 'Take cows back to pasture\n'
        factors.cows_location = 'pasture'
        factors.actions_count += 1
        return
    else: return
def milk_cows(factors):
    while factors.cow_milking_status == True:
        if factors.cows_location == 'cowshed':
            factors.actions_list += 'Milk the cows\n'
            factors.cow_milking_status = False
            factors.actions_count += 1
        else: take_cows_to_cowshed(factors)
    return
def fertilize_pasture(factors):
    while factors.slurry_tank == True and factors.weather != 'sunny' and factors.weather != 'windy':
        if factors.cows_location == 'cowshed':
            factors.actions_list += 'Fertilize pasture\n'
            factors.slurry_tank = False
            factors.actions_count += 1
        else: take_cows_to_cowshed(factors)
    return
def mow_grass(factors):
    while factors.season == 'spring' and factors.weather == 'sunny' and factors.grass_status == True:
        if factors.cows_location == 'cowshed':
            factors.actions_list += 'Mow grass\n'
            factors.grass_status = False
            factors.actions_count += 1
        else: take_cows_to_cowshed(factors)
    return
def wait(factors):
    factors.actions_list += 'Wait\n'
    return

class Factors:
    def __init__(self, weather, time_of_day, cow_milking_status, cows_location, season, slurry_tank, grass_status):
        self.weather = weather
        self.time_of_day = time_of_day
        self.cow_milking_status = cow_milking_status
        self.cows_location = cows_location
        self.season = season
        self.slurry_tank = slurry_tank
        self.grass_status = grass_status
        
f1 = Factors('sunny', 'day', True, 'pasture', 'spring', False, True)
f2 = Factors('rainy', 'night', False, 'cowshed', 'winter', False, True)
f3 = Factors('rainy', 'night', False, 'cowshed', 'winter', True, True)
f4 = Factors('windy', 'night', True, 'cowshed', 'winter', True, True)

if __name__ == '__main__':
    farm_action(f1)
    print('----------------------------')
    farm_action(f2)
    print('----------------------------')
    farm_action(f3)
    print('----------------------------')
    farm_action(f4)