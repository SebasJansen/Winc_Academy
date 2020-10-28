const {
    get_yield_for_plant,
    get_yield_for_crop,
    // get_total_yield,
    // get_costs_for_plant,
    // get_costs_for_crop,
    // get_revenue_for_plant,
    // get_revenue_for_crop,
    // get_profit_for_plant,
    // get_profit_for_crop,
} = require("./farm");

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    test("Get yield for plant with no environment factors", () => {
        expect(get_yield_for_plant(corn)).toBe(30);
    });
});

describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop(input)).toBe(30);
    });
});

describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_yield({ crops })).toBe(23);
    });
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_yield({ crops })).toBe(0);
    });
});
// describe("get_costs_for_plant", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//         costs: 15,
//     };
//     test("Get cost for one seed", () => {
//         expect(get_costs_for_plant(corn)).toBe(15);
//     });
// });
// describe("get_costs_for_crop", () => {
//     test("Get costs for crop", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//             costs: 1,
//         };
//         const input = {
//             crop: corn,
//             num_crops: 10,
//         };
//         expect(get_costs_for_crop(input)).toBe(10);
//     });
// });
// describe("get_revenue_for_plant", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//         costs: 15,
//         revenue: 5,
//     };
//     test("Get revenue for one plant", () => {
//         expect(get_revenue_for_plant(corn)).toBe(150);
//     });
// });
// describe("get_revenue_for_crop", () => {
//     test("Get revenue for crop", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//             costs: 1,
//             revenue: 2,
//         };
//         const input = {
//             crop: corn,
//             num_crops: 10,
//         };
//         expect(get_revenue_for_crop(input)).toBe(60);
//     });
// });
// describe("get_profit_for_plant", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//         costs: 15,
//         revenue: 5,
//     };
//     test("Get profit for one plant", () => {
//         expect(get_profit_for_plant(corn)).toBe(135);
//     });
// });
// describe("get_profit_for_crop", () => {
//     test("Get profit for crop", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//             costs: 1,
//             revenue: 2,
//         };
//         const input = {
//             crop: corn,
//             num_crops: 10,
//         };
//         expect(get_profit_for_crop(input)).toBe(50);
//     });
// });