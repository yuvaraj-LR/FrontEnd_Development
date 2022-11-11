// Switch-Statments.

let havingAmount = 100;

switch (havingAmount > 0) {
    case (havingAmount > 5000 && havingAmount < 15000):
        {
            console.log("You can buy basic mobiles.");
            break;
        }

    case (havingAmount > 15000 && havingAmount < 30000):
        {
            console.log("You can buy the android flagship mobiles.");
            break;
        }

    case (havingAmount > 30000):
        {
            console.log("You can buy the iphone mobiles.");
            break;
        }

    default:
        {
            console.log("You can't affort any mobiles at this cost.")
            break;
        }
}