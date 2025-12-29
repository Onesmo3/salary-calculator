# Tanzania Mainland Salary Calculator

A professional, lightweight, and reliable **web-based payroll calculator** developed to support **salary computation for Tanzania Mainland**.  
The application accurately calculates **statutory deductions** and **net pay** in accordance with Tanzania Mainland payroll principles.

This tool is ideal for organizations, payroll officers, developers, and individuals seeking a simple and transparent salary calculation solution.

---

## Overview

The Tanzania Mainland Salary Calculator is designed to provide fast and accurate payroll calculations through a clean and intuitive interface.  
It eliminates manual errors by automatically computing **NSSF contributions**, **PAYE (Tax)**, and **Net Salary**.

The system is built using standard web technologies and can operate both **online and offline**.

---

## Key Features

- Automated **NSSF contribution calculation (10%)**
- Accurate **PAYE computation** based on Tanzania Mainland tax structure
- Instant **Net Pay calculation**
- Clean, minimal, and user-friendly interface
- Progressive Web App (PWA) support for offline usage
- No external dependencies

---

## Salary Calculation Logic

- **Gross Salary** – Total monthly earnings  
- **NSSF** = 10% of Gross Salary  
- **Taxable Income** = Gross Salary − NSSF  
- **PAYE** = Calculated using Tanzania Mainland PAYE rates  
- **Net Pay** = Gross Salary − (NSSF + PAYE)

---

## Technology Stack

- **HTML5** – Application structure  
- **CSS3** – Responsive and professional styling  
- **JavaScript (Vanilla)** – Core calculation logic  
- **Service Worker** – Offline capability  
- **Web App Manifest** – Progressive Web App support  

---

## Project Structure
salary-calculator/
  Salary Calculator.html
  Salary Calculator.css
  Salary Calculator.js
  Service Worker.js
  Manifest.json
---

## Installation & Usage

### Step 1: Clone the Repository
```bash
git clone https://github.com/Onesmo3/salary-calculator.git