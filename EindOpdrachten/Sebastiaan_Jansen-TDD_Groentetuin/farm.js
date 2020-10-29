const get_yield_for_plant = (plant) => {
    return plant.yield;
}
const get_yield_for_crop = (cropObject) => {
    const yield_for_plant = get_yield_for_plant(cropObject.crop);
    const yield_for_crop = yield_for_plant * cropObject.num_crops;
    return yield_for_crop;
}
const get_total_yield = (cropsInput) => {
    let total_yield = 0;
    cropsInput.crops.forEach(crop => {
        total_yield += get_yield_for_crop(crop);
    });
    return total_yield;
}
const get_costs_for_plant = (plant) => {
    return plant.costs;
}
const get_costs_for_crop = (cropObject) => {
    const costs_for_plant = get_costs_for_plant(cropObject.crop);
    const costs_for_crop = costs_for_plant * cropObject.num_crops;
    return costs_for_crop;
}
const get_revenue_for_plant = (plant) => {
    return plant.sale_price * plant.yield;
}
const get_revenue_for_crop = (cropObject) => {
    const revenue_for_plant = get_revenue_for_plant(cropObject.crop);
    const revenue_for_crop = revenue_for_plant * cropObject.num_crops;
    return revenue_for_crop;
}
const get_profit_for_plant = (plant) => {
    return get_revenue_for_plant(plant) - get_costs_for_plant(plant);
}
const get_profit_for_crop = (cropObject) => {
    const profit_for_plant = get_profit_for_plant(cropObject.crop);
    const profit_for_crop = profit_for_plant * cropObject.num_crops;
    return profit_for_crop;
}
const get_total_profit = (cropsInput) => {
    let total_profit = 0;
    cropsInput.crops.forEach(crop => {
        total_profit += get_profit_for_crop(crop);
    });
    return total_profit;
}
const get_yield_for_plant_with_factors = (plant, factors) => {
    const plantYieldNoFactors = plant.yield;
    const environmentFactorSun = factors.sun;
    const environmentFactorWind = factors.wind;
    const plantFactorSun = plant.factors.sun[environmentFactorSun];
    const plantFactorWind = plant.factors.wind[environmentFactorWind];
    let plantYieldWithSunFactor = 0;
    let plantYieldWithWindFactor = 0;
    if (plantFactorSun === 0) {
        plantYieldWithSunFactor = plantYieldNoFactors;
    }
    else if (Math.sign(plantFactorSun) === 1) {
        plantYieldWithSunFactor = ((plantFactorSun / 100) * plantYieldNoFactors) + plantYieldNoFactors;
    }
    else {
        plantYieldWithSunFactor = (plantYieldNoFactors * (plantFactorSun / 100)) + plantYieldNoFactors;
    }
    if (plantFactorWind === 0) {
        plantYieldWithWindFactor = plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    else if (Math.sign(plantFactorWind) === 1) {
        plantYieldWithWindFactor = ((plantFactorWind / 100) * plantYieldWithSunFactor) + plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    else {
        plantYieldWithWindFactor = (plantYieldWithSunFactor * (plantFactorWind / 100)) + plantYieldWithSunFactor;
        return plantYieldWithWindFactor;
    }
    
}
const get_yield_for_crop_with_factors = (cropObject, factors) => {
    const yield_for_plant_with_factors = get_yield_for_plant_with_factors(cropObject.crop, factors);
    const yield_for_crop_with_factors = yield_for_plant_with_factors * cropObject.num_crops;
    return yield_for_crop_with_factors;
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_plant,
    get_costs_for_crop,
    get_revenue_for_plant,
    get_revenue_for_crop,
    get_profit_for_plant,
    get_profit_for_crop,
    get_total_profit,
    get_yield_for_plant_with_factors,
    get_yield_for_crop_with_factors,
};