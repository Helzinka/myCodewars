fn main() {
    let test = even_or_odd(1);
    println!("{}", test);
}

fn even_or_odd(i: i32) -> &'static str {
    if i % 2 == 0 {
        "Even"
    }else {
        "Odd"
    }
}


// fn even_or_odd(i: i32) -> &'static str {
//     match i % 2 {
//       0 => "Even",
//       _ => "Odd",
//     }
// }


// ternaire
// fn even_or_odd(i: i32) -> &'static str {
//     if i % 2 == 0  { "Even" } else { "Odd" }
//   }