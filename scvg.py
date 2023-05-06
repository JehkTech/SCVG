
import random
import tkinter as tk

def generate_numbers():
    mtn_numbers = []
    airtel_numbers = []
    zamtel_numbers = []

    # Generate 14-digit numbers for MTN and Airtel
    for i in range(3):
        mtn_number = str(random.randint(1, 9)) + str(random.randint(6, 9))
        airtel_number = str(random.randint(1, 9)) + str(random.randint(7, 9))
        for j in range(12):
            mtn_number += str(random.randint(0, 9))
            airtel_number += str(random.randint(0, 9))
        mtn_numbers.append(mtn_number)
        airtel_numbers.append(airtel_number)

    # Generate 13-digit numbers for Zamtel
    for i in range(3):
        zamtel_number = str(random.randint(1, 9)) + str(random.randint(9, 9))
        for j in range(11):
            zamtel_number += str(random.randint(0, 9))
        zamtel_numbers.append(zamtel_number)

    # Update the labels with the generated numbers
    mtn_label.config(text='MTN Numbers: ' + str(mtn_numbers))
    airtel_label.config(text='Airtel Numbers: ' + str(airtel_numbers))
    zamtel_label.config(text='Zamtel Numbers: ' + str(zamtel_numbers))

# Create the GUI window
window = tk.Tk()
window.title("Zambian Scratch Card Number Generator")
window.geometry("800x300")

# Create the "Generate Numbers" button
generate_button = tk.Button(window, text="Generate Numbers", font=("Arial", 16), bg="#c5c6c7", fg="#1f2833", command=generate_numbers)
generate_button.pack(pady=10)

# Create the labels for displaying the generated numbers
mtn_label = tk.Label(window, text="MTN Numbers: ", font=("Arial", 14), bg="#ffffff", fg="#1f2833")
mtn_label.pack(pady=5)
airtel_label = tk.Label(window, text="Airtel Numbers: ", font=("Arial", 14), bg="#ffffff", fg="#1f2833")
airtel_label.pack(pady=5)
zamtel_label = tk.Label(window, text="Zamtel Numbers: ", font=("Arial", 14), bg="#ffffff", fg="#1f2833")
zamtel_label.pack(pady=5)

# Start the GUI event loop
window.mainloop()

