fn main() {
    let arr= [2 , 3, -3];
    let test = positive_sum(&arr);
    println!("{}", test);
}

fn positive_sum(slice: &[i32]) -> i32 {
    let mut sum = 0;
    for i in 0..slice.len() {
        if slice[i] > 0 {
            sum += slice[i]
        } 
    }
    return sum
}

// fn positive_sum(slice: &[i32]) -> i32 {
//     let mut sum = 0;
//     for &item in slice {
//         if item > 0 {
//             sum += item
//         }
//     }
//     sum
// }

// fn positive_sum(arr: &[i32]) -> i32 {
//     arr.iter().filter(|x| x.is_positive()).sum()
// }