# Do not modify these lines
__winc_id__ = '62311a1767294e058dc13c953e8690a4'
__human_name__ = 'casting'

# Add your code after this line
leek_price = 2
print(f'Leek is {leek_price} euros per kilo.')
order = 'leek 4'
leek_order_amount = [int(i) for i in order.split() if i.isdigit()]
leek_order_amount_string_list = [str(integer) for integer in leek_order_amount]
leek_order_amount_string = "".join(leek_order_amount_string_list)
leek_order_amount_integer = int(leek_order_amount_string)
sum_total = (leek_price * leek_order_amount_integer)
print(sum_total)

import re
broccoli_price = 2.34
order_two = 'broccoli 1.6'
broccoli_order_amount_list = re.findall(r"[-+]?\d*\.\d+|\d+", order_two)
broccoli_order_amount_string = "".join(broccoli_order_amount_list)
broccoli_order_amount_float = float(broccoli_order_amount_string)
sum_total_order_two = (broccoli_price * broccoli_order_amount_float)
sum_total_order_two = ("%.2f" % sum_total_order_two)
print (f'{broccoli_order_amount_string}kg broccoli costs {sum_total_order_two}e.')