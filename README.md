# Commit Message Types

Use these commit message types to maintain clear and structured Git history:

## Types and Examples

- **`add`**: Adding new files or features

  ```sh
  git commit -m "add: user profile page"
  ```

- **`feat`**: Implementing a new feature

  ```sh
  git commit -m "feat: dark mode toggle"
  ```

- **`fix`**: Fixing bugs or issues

  ```sh
  git commit -m "fix: resolve login issue"
  ```

- **`docs`**: Updating documentation

  ```sh
  git commit -m "docs: update README"
  ```

- **`style`**: Code formatting, no logic change

  ```sh
  git commit -m "style: fix indentation"
  ```

- **`refactor`**: Code restructuring without behavior changes

  ```sh
  git commit -m "refactor: optimize database query"
  ```

- **`chore`**: Maintenance tasks

  ```sh
  git commit -m "chore: update dependencies"
  ```

- **`config`**: Configuration changes
  ```sh
  git commit -m "config: update Webpack settings"
  ```

## Format

```sh
<type>: <short description>
```

Example:

```sh
git commit -m "feat: add JWT authentication"
```
