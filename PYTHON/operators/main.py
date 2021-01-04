# Do not modify these lines
__winc_id__ = 'd0d3cdcefbb54bc980f443c04ab3a9eb'
__human_name__ = 'operators'

# Add your code after this line
spain_most_spoken_language = 'Castilian Spanish'
switzerland_most_spoken_language = 'German'
print(spain_most_spoken_language == switzerland_most_spoken_language)
spain_most_prevalent_religion = 'Roman Catholic'
switzerland_most_prevalent_religion = 'Roman Catholic'
print(spain_most_prevalent_religion == switzerland_most_prevalent_religion)
spain_capital_name_len = len('Madrid')
switzerland_capital_name_len = len('Bern')
print(spain_capital_name_len != switzerland_capital_name_len)
spain_gdp = 1778000000000
switzerland_gdp = 580000000000
print(spain_gdp < switzerland_gdp)
spain_population_growth = 0.67
switzerland_population_growth = 0.66
print(spain_population_growth < 1 and switzerland_population_growth < 1)
spain_population_count = 50000000
switzerland_population_count = 8400000
print(spain_population_count > 10000000 or switzerland_population_count > 10000000)
print((spain_population_count > 10000000 and switzerland_population_count < 10000000) or (spain_population_count < 10000000 and switzerland_population_count > 10000000))