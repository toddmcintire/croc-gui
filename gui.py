from tkinter import *
from tkinter import ttk
from installer import *

#updateText = "Updated!!!"

def updater():
    #global updateText
    display.config(text="updateText")

def updaterTwo():
    display.config(text=getExecution())

root = Tk()
frame = ttk.Frame(root, padding=10)
display = Label(frame, text="croc gui")

frame.grid()
root.title("croc gui")
display.grid(column=3, row=1)
ttk.Button(frame, text="update text", command=lambda : updater()).grid(column=1, row=2)
ttk.Button(frame, text="update two", command=lambda : updaterTwo()).grid(column=2, row=2)
ttk.Button(frame, text="check execution policy", command=lambda : getExecution() ).grid(column=4,row=3)
ttk.Button(frame, text="change execution policy", command=lambda : display.config(text=changerExecution())).grid(column=4,row=4)
ttk.Button(frame, text="Quit", command=root.destroy).grid(column=5, row=5)
root.mainloop()
