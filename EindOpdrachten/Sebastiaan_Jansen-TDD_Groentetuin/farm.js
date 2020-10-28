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
    return plant.revenue * plant.yield;
}
const get_revenue_for_crop = (cropObject) => {
    const revenue_for_plant = get_revenue_for_plant(cropObject.crop);
    const revenue_for_crop = revenue_for_plant * cropObject.num_crops;
    return revenue_for_crop;
}
const get_profit_for_plant = (plant) => {
    return get_revenue_for_plant(plant) - get_costs_for_plant(plant);
}
// const get_profit_for_crop = (cropObject) => {
//     const profit_for_plant = get_profit_for_plant(cropObject.crop);
//     const profit_for_crop = profit_for_plant * cropObject.num_crops;
//     return profit_for_crop;
// }

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_plant,
    get_costs_for_crop,
    get_revenue_for_plant,
    get_revenue_for_crop,
    get_profit_for_plant,
    // get_profit_for_crop,
};