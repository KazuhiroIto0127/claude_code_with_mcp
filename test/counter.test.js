import { describe, it, expect, beforeEach } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

describe('Counter Functionality', () => {
  let document

  beforeEach(() => {
    const html = readFileSync(join(process.cwd(), 'index.html'), 'utf-8')
      .replace('<link rel="stylesheet" href="style.css">', '')
    
    // スクリプト部分を抽出してから削除
    const scriptMatch = html.match(/<script[\s\S]*?>([\s\S]*?)<\/script>/i)
    const scriptContent = scriptMatch ? scriptMatch[1] : ''
    
    const cleanHtml = html.replace(/<script[\s\S]*?<\/script>/gi, '')
    document = new DOMParser().parseFromString(cleanHtml, 'text/html')
    global.document = document
    
    // JavaScriptを実行
    if (scriptContent) {
      eval(scriptContent)
    }
  })

  it('should have counter button and value elements', () => {
    const button = document.getElementById('counterBtn')
    const value = document.getElementById('counterValue')
    
    expect(button).toBeTruthy()
    expect(value).toBeTruthy()
    expect(button.textContent).toBe('カウント')
    expect(value.textContent).toBe('0')
  })

  it('should have correct CSS classes', () => {
    const button = document.getElementById('counterBtn')
    const value = document.getElementById('counterValue')
    const section = document.querySelector('.counter-section')
    
    expect(button).toHaveClass('counter-button')
    expect(value).toHaveClass('counter-value')
    expect(section).toBeTruthy()
  })

  it('should increment counter when button is clicked', () => {
    const button = document.getElementById('counterBtn')
    const value = document.getElementById('counterValue')
    
    expect(value.textContent).toBe('0')
    
    button.click()
    expect(value.textContent).toBe('1')
    
    button.click()
    expect(value.textContent).toBe('2')
    
    button.click()
    expect(value.textContent).toBe('3')
  })

  it('should handle multiple rapid clicks', () => {
    const button = document.getElementById('counterBtn')
    const value = document.getElementById('counterValue')
    
    for (let i = 0; i < 10; i++) {
      button.click()
    }
    
    expect(value.textContent).toBe('10')
  })
})