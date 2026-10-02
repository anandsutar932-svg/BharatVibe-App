# BharatVibe — GitHub APK Build

This project includes a GitHub Actions workflow that builds a debug Android APK.

## Phone-only steps
1. Create a GitHub account and a new repository named `BharatVibe`.
2. Upload/extract this project into the repository so `gradlew` is in the repository root.
3. Open the **Actions** tab and run **Build BharatVibe APK** (or push to `main`).
4. Open the completed workflow run.
5. Download the artifact named **BharatVibe-debug-apk**.
6. Extract the artifact and install the APK on your Android phone.

Note: this is a debug APK for testing, not a Play Store release build.
