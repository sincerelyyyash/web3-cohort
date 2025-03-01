trait Shape {
    fn area(&self) -> u32;
}

struct Rect {
    width: u32,
    height: u32,
}

impl Shape for Rect {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }
}

struct Circle {
    radius: f32,
}

// impl Shape for Circle {
//     fn area(&self) -> u32 {
//         return self.radius * 3.14;
//     }
// }

fn main() {
    let r = Rect {
        width: 10,
        height: 20,
    };

    // let c = Circle { radius: 10 };
    // get_area(c);

    get_area(r);
}

fn get_area(s: impl Shape) -> u32 {
    return s.area();
}
