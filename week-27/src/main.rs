use std::f32::consts::PI;

// enum
enum Direction {
    East,
    West,
    North,
    South,
}

enum Shape {
    Square(f32),
    Circle(f32),
    Rectangle(f32, f32),
}

enum Option1 {
    Some(u32),
    None,
}

//Structs Example
struct Rect {
    height: f32,
    width: f32,
}

impl Rect {
    fn area(&self) -> f32 {
        return self.width * self.height;
    }

    fn print_some() {
        println!("Something")
    }
}

fn main() {
    //Borrowing & References
    let mut s1 = String::from("Yash");

    println!("{}", s1);

    let s2: &String = &s1;

    // Structs
    let r = Rect {
        width: 10.0,
        height: 20.0,
    };

    println!("{},{}", r.width, r.height);

    println!("{}", r.area());
    Rect::print_some();

    //enum with values
    let shape = Shape::Square(10.0);
    let shape_circle = Shape::Circle(10.0);
    let shape_rect = Shape::Rectangle(20.0, 20.0);

    let ans = find_first(String::from("sdasdasdad"));

    match ans {
        None => print!("Value not found"),
        Some(val) => print!("A found at index {}", val),
    }
}

//enum
fn steer(dir: Direction) {
    match dir {
        Direction::East => print!("East Direction"),
        Direction::South => print!("South Direction"),
        _ => println!("Horizontal Direction"),
    }
}

//enum with values
fn calculate_area(s: Shape) -> f32 {
    return match s {
        Shape::Circle(r) => PI * r * r,
        Shape::Rectangle(l, h) => l * h,
        Shape::Square(l) => l * l,
    };
}

fn find_first(str: String) -> Option<u32> {
    let mut i = 0;
    for c in str.chars() {
        if c == 'a' {
            return Some(i);
        }
    }
    None
}
