# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a playground repository for experimenting with Claude Code and MCP (Model Context Protocol) integration. The primary focus is on building simple web applications and testing them using Playwright MCP for browser automation.

## Development Workflow

The development workflow emphasizes hands-on testing:
1. Implement web functionality
2. Use Playwright MCP to access and test the implemented features
3. Verify there are no errors through browser automation

## MCP Configuration

The repository uses the Playwright MCP server for browser automation testing:

- **MCP Configuration**: `.mcp.json` contains the Playwright server setup
- **Server Command**: `npx @playwright/mcp@latest`
- **Claude Permissions**: Browser navigation, screenshots, tab management, and Node.js commands are enabled in `.claude/settings.local.json`

## Available Tools

Since this is a playground without traditional build tools, development relies on:
- **Node.js/npm/npx**: Available for running JavaScript-based tools
- **Playwright MCP**: For browser automation and testing web implementations
- **Git**: For version control

## Testing Strategy

Testing is performed through browser automation rather than traditional unit tests:
- Use Playwright MCP to navigate to implemented features
- Take screenshots to verify visual implementations
- Interact with web elements to ensure functionality works correctly
- Verify error-free operation through actual browser usage

## Repository Structure

This is a minimal repository focused on experimentation:
- Root level contains configuration files for MCP and Claude Code
- No source code directories yet - to be created as needed for web implementations
- No traditional build/test infrastructure - relies on MCP browser testing