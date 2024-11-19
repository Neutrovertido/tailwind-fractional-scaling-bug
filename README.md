# Tailwind CSS mx-auto Bug Showcase

This project is created to demonstrate a bug in Tailwind CSS, specifically when using the `mx-auto` utility in combination with fractional scaling on Windows 11 operating systems and the `xl` viewport.

## Bug Description

The issue arises when the system scaling is set to a value above 100% (e.g., 125%, 150%) on Windows 11 (might also happen on MacOS and Linux). When using Tailwind CSS with the `xl` viewport and applying the `mx-auto` utility, the horizontal margin is presumably incorrectly calculated, causing the element to appear too close to the screen borders.

This bug does not occur when scaling the browser or when the system scaling is set to 100%.

## Steps to Reproduce

1. Set your system's display scale to a value above 100% (e.g., 125%, 150%) on a Windows 11 system.
2. Create a webpage that uses Tailwind CSS (preferably with ReactJS) and the `mx-auto` utility with the `xl` viewport.
3. Load the page in Mozilla Firefox or Chrome/any Chromium-based browser and observe the horizontal margin behavior.

## Expected Behavior

The element with the `mx-auto` utility should have consistent horizontal margins regardless of the system scaling settings. It should be equally distant from the screen borders, as shown in the expected result.

![Expected Result](https://github.com/user-attachments/assets/2da2865c-7e5e-4932-9705-dc47f02bd1ff)

## Actual Behavior

When system scaling is set to above 100%, the horizontal margin becomes much smaller than expected, causing the element to be too close to the screen borders.

![Actual Result](https://github.com/user-attachments/assets/23802274-591e-48d4-95ba-78fc48cd39b7)

## Live Demo

You can view a live demo of the bug on the following link:  
[Live Demo](https://glowing-sunshine-667537.netlify.app/)

## Environment

- **ReactJS version**: v13.4.0
- **Tailwind CSS version**: v3.4.15
- **Node.js version**: v22.11
- **Browser**: Mozilla Firefox / Chromium
- **Operating System**: Windows 11

## Dependencies

- `autoprefixer`: ^10.4.20
- `postcss`: ^8.4.49
- `tailwindcss`: ^3.4.15

## Acknowledgements

This project is purely for showcasing the bug. It is not an official bug fix however it does contain a [workaround using JavaScript functions](./src/ManualFixForApp.js).

---

Feel free to fork this project and test it on different systems to help identify the cause and potential solutions for this bug.
