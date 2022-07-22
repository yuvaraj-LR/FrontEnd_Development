let myDetails = {
    name: "Yuvaraj",
    age: 20,
    sex: 'M',
    dob: {
        day: 17,
        mon: 'Aug',
        year: 2002
    },
    address: {
        dr_no: '41/28',
        street: 'Sivarayar Garden 3rd street',
        area: 'M.Chavadi',
        district: 'Tnj',
        state: 'TN',
        p_code: 613001
    },
    p_no: 8428480807,
    show_Details: function() {
        let msg = `My name is ${this.name}, my age is ${this.age}, he was in the area ${this.address.area}`;
        console.log(msg);
    }
};

myDetails.show_Details();