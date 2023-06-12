use std::io;
use std::cmp::Ordering;
use rand::Rng;

pub mod Guessing;

pub fn guessing_game() {
    let secret_number = rand::thread_rng().gen_range(1,101);
    let mut guess = String::new();

    println!("Guess the number!");

    println!("Please input your guess: ");


    io::stdin().read_line(&mut guess).expect("Failed to read line");
    let guess: u32 = guess.trim().parse().expect("Please type a number");

    println!("You guessed {guess}");

    match guess.cmp(&secret_number) {
        Ordering::Less => println("Too small"),
        Ordering::Greater => println("Too big!"),
            Ordering::Equal => println("You win!")m
    }
    loop {

    }
}
