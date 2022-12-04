export const tabButtons: OptionType[] = [
    { title: "Break Fast", value: "breakFast" },
    { title: "Lunch", value: "lunch" },
    { title: "Dinner", value: "dinner" },
    { title: "Others", value: "others" }
];

export const caloriesCard: OptionType[] = [
    { value: "Total Calories", title: "2,500" },
    { value: "Daily Remaining", title: "1,500" }
];

export const items: Iitems = {
    "breakFast": [
        { title: "Nashta (Chai - Paratha)", quantity: 2, calories: 2500, time: "2 mins", img: "chai-paratha" },
        { title: "Anda Paratha", quantity: 2, calories: 2500, time: "2 mins", img: "anda-paratha" },
        { title: "Halwa Puri", quantity: 2, calories: 2500, time: "2 mins", img: "halwa-puri" },
        { title: "Doodh", quantity: 2, calories: 2500, time: "2 mins", img: "doodh" },
        { title: "Naan Chaney", quantity: 2, calories: 2500, time: "2 mins", img: "naan-chanay" }
    ],
    "lunch": [],
    "dinner": [
        { title: "Doodh", quantity: 2, calories: 2500, time: "2 mins", img: "doodh" }
    ],
    "others": []
};