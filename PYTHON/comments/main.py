# Do not modify these lines
__winc_id__ = '63ce21059cf34d3d8ffef497ede7e317'
__human_name__ = 'comments'

# Add your code after this line
# Making variable for the numbers
postalcodeNumbers = 1234
# Making variable for the letters
postalcodeLetters = "ab"
""" Adding together an int and an string isn't possible normally
That's why we use str() to take the int and turn it into a string"""
postalcode = str(postalcodeNumbers)+postalcodeLetters # Add both variables together
""" After this is pasted together
it will be valid and printable"""
print (postalcode) # Prints the complete postalcode