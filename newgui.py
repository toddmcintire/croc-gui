import dearpygui.dearpygui as dpg

def save_callback():
    print("Saving...")

dpg.create_context()
dpg.create_viewport()
dpg.setup_dearpygui()

with dpg.window(label="croc gui"):
    dpg.add_text("croc gui")
    dpg.add_button(label="save", callback=save_callback)
    dpg.add_input_text(label="input text")
    dpg.add_slider_float(label="float slider")

dpg.show_viewport()
dpg.start_dearpygui()
dpg.destroy_context()