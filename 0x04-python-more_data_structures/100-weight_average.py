#!/usr/bin/python3

def weight_average(my_list=[]):
    # Calculate the weighted sum and total weight
    weighted_sum = sum(score * weight for score, weight in my_list)
    total_weight = sum(weight for _, weight in my_list)

    # Calculate the weighted average
    average = weighted_sum / total_weight if total_weight != 0 else 0
    return average
