# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0

### Changed

- **Breaking** Using the new `values` static property

```diff
- <strong data-controller="animated-number" data-animated-number-start="0" data-animated-number-end="100" data-animated-number-duration="3000"></strong>
+ <strong data-controller="animated-number" data-animated-number-start-value="0" data-animated-number-end-value="100" data-animated-number-duration-value="3000"></strong>
```

## [1.0.0] - 2020-11-10

### Added

- Adding controller
