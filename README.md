# TaskFlow CI practice project

A basic browser task list with add, complete, and delete actions. Tasks are saved in localStorage. The project uses no external dependencies.

## Open in Antigravity or VS Code

Extract this ZIP and open the `taskflow` folder. Use a local web server or a Live Server extension to view `index.html` (ES module imports may not work correctly when opened with `file://`). If Python is installed, run `python -m http.server 8000` in this folder and visit http://localhost:8000.

Install Node.js 20 or later, then run `npm test` in the project folder. The same tests run on GitHub Actions after a push or pull request.

## Put it on GitHub

1. Create a **new, empty** GitHub repository, e.g. `taskflow-ci-demo`. Do not copy another student's repository.
2. In the project folder's terminal, run:

   ```bash
   git init
   git add .
   git commit -m "Add TaskFlow app and CI"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/taskflow-ci-demo.git
   git push -u origin main
   ```

3. Under **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. Open the repository's **Actions** tab and check the **CI** workflow. It should show `test` passing and `deploy` publishing the site after a push to `main`. If the initial deployment ran before Pages was enabled, use **Re-run jobs** or push a new commit. Pull requests run tests but do not deploy.
4. To demonstrate branching, run:

   ```bash
   git switch -c feature/improve-heading
   ```

   Change the visible heading in `index.html`, then run:

   ```bash
   npm test
   git add index.html
   git commit -m "Improve heading"
   git push -u origin feature/improve-heading
   ```

   On GitHub, open a pull request from this branch into `main`; confirm the CI check passes before merging.

## Optional repository settings

- **Branch protection:** Once the CI job has run, use Settings → Branches → Add branch protection rule. Set branch name `main`, select **Require a pull request before merging** and **Require status checks to pass before merging**, then select the `test` check. Availability and enforcement depend on repository visibility and plan. Do this after the first push so a check exists to select.
- **Secrets:** This app does not need a secret. If your assignment explicitly requires demonstrating GitHub Secrets, add a harmless demonstration secret via Settings → Secrets and variables → Actions → New repository secret, such as `DEMO_MESSAGE`. Do not put actual passwords or tokens in project files or print the value in logs. A secret merely stored in GitHub is not a feature of this app; document honestly what you configured and used.
- **Deployment:** The workflow is configured to publish the static site to GitHub Pages only after tests pass on `main`. Verify the live Pages URL before saying deployment succeeded in your report.

## What you can accurately write in your report

After doing the steps above yourself, describe the code you studied or changed, the tests you ran, your own branch and pull request, and the observed CI result. Mention branch protection or Secrets only if you actually configured them. The date, problems, fixes, and outcomes should come from your own work.
