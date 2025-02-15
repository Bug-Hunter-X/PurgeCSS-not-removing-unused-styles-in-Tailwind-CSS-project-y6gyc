# PurgeCSS Configuration Issue in Tailwind CSS Project

This repository demonstrates a problem with PurgeCSS failing to remove unused Tailwind CSS styles. The project is set up with basic HTML, CSS, and a PurgeCSS configuration, yet unused styles remain in the final CSS output.

## Problem Description

Despite properly configuring PurgeCSS to target HTML files and CSS files, PurgeCSS does not effectively remove unused Tailwind CSS classes from the final CSS output, leading to bloated and inefficient CSS.

## Solution

The solution involves revisiting the PurgeCSS configuration and potentially adjusting the `defaultExtractor` function to ensure that all Tailwind classes are correctly identified and processed by PurgeCSS. The key issue might be related to how PurgeCSS is parsing the HTML content.