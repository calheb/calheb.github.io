+++
author = "Caleb Hebert"
title = "How to Install and use Ventoy"
date = "2023-05-26"
description = "How to Install and use Ventoy"
tags = [
    "misc",
    "ventoy",
]
+++

Ventoy is a program that allows a USB drive to function as an installer/live instance of multiple operating systems at once. Once set up, the USB is still able to store files like usual, but if selected as a boot drive, it will display a menu with all of the .iso files on the drive to choose from.

<!-- ![A building](/images/building.png " ") -->

### What you'll need.
- USB drive (anything larger than 1 GB should work).
- Computer running Linux or Windows.
- .iso or other supported file type. These can be found on [Ventoy's main page](https://www.ventoy.net/en/index.html).


### First, download and extract Ventoy.
![Ventoy home page.](/images/howto_ventoy/picture1.png " ") 
![Ventoy home page.](/images/howto_ventoy/picture2.png " ") 
![Ventoy home page.](/images/howto_ventoy/picture3.png " ") 

### Once extracted, run ventoy2disk.exe
![Ventoy home page.](/images/howto_ventoy/picture4.png " ") 

### Select your USB drive from the drop down list and install Ventoy.
![Ventoy home page.](/images/howto_ventoy/picture6.png " ") 

### Next, place your .iso file on the drive.
![Ventoy home page.](/images/howto_ventoy/picture7.png " ") 

For convenience, you can create a designated folder to store your .iso files, though this is not necessary.

### Navigate to your BIOS and set the Ventoy USB as the boot device.
![Ventoy home page.](/images/howto_ventoy/bios_boot_selection.png " ") 

BIOS interfaces vary by manufacturer, but can typically be accessed by pressing the 'DEL' or 'F2' key while your PC is booting. Verify this for your machine.

Once in the BIOS, you will be able to edit the boot order to allow booting from the newly minted Ventoy live USB.

### Finally, select your desired operating system from the Ventoy menu. 
![Ventoy home page.](/images/howto_ventoy/ventoy_menu.png " ") 

From here you will be able to install the OS if desired, or simply utilize it as a normal live USB.

{{< css.inline >}}
<style>
.canon { background: white; width: 100%; height: auto; }
</style>
{{< /css.inline >}}
