from tkinter import *
from tkinter import ttk
from tkinter import messagebox
from installer import *

root = Tk()
frame = ttk.Frame(root, padding=10)
display = Label(frame, text="croc gui")

# Quits the program if choco is not installed and quits
if is_tool("choco") == False:
    chocoQuit() 


frame.grid()
root.title("croc gui")
display.grid(column=3, row=1)
ttk.Button(frame, text="check if choco", command=lambda : display.config(text=is_tool("choco"))).grid(column=4,row=4)
#TODO: change below button command to install croc function
ttk.Button(frame, text="install choco", command=lambda : display.config(text=installChoco())).grid(column=4,row=5)
ttk.Button(frame, text="Quit", command=root.destroy).grid(column=5, row=5)
root.mainloop()

#TODO: check if user has choco installed,  if they dont run an alert window


