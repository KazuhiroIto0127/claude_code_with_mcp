import { describe, it, expect, beforeEach } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

describe('Gallery HTML Structure', () => {
  let document

  beforeEach(() => {
    const html = readFileSync(join(process.cwd(), 'index.html'), 'utf-8')
      .replace('<link rel="stylesheet" href="style.css">', '')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
    document = new DOMParser().parseFromString(html, 'text/html')
    global.document = document
  })

  it('should have correct page title', () => {
    const title = document.querySelector('title')
    expect(title.textContent).toBe('アートギャラリー - 創造の世界')
  })

  it('should have main header with correct title', () => {
    const header = document.querySelector('.gallery-header h1')
    expect(header.textContent).toBe('創造の世界')
  })

  it('should have three artwork cards', () => {
    const artworkCards = document.querySelectorAll('.artwork-card')
    expect(artworkCards).toHaveLength(3)
  })

  it('should have navigation links to detail pages', () => {
    const links = document.querySelectorAll('.artwork-card')
    const expectedLinks = ['abstract.html', 'nature.html', 'geometric.html']
    
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(expectedLinks[index])
    })
  })

  it('should have inspiration quote section', () => {
    const quote = document.querySelector('.inspiration-quote blockquote')
    expect(quote).toBeTruthy()
    expect(quote.textContent).toContain('芸術は人生を模倣するのではなく')
  })

  it('should have footer with copyright', () => {
    const footer = document.querySelector('.gallery-footer p')
    expect(footer.textContent).toContain('2024 創造の世界')
  })
})

describe('Gallery CSS Classes', () => {
  let document

  beforeEach(() => {
    const html = readFileSync(join(process.cwd(), 'index.html'), 'utf-8')
      .replace('<link rel="stylesheet" href="style.css">', '')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
    document = new DOMParser().parseFromString(html, 'text/html')
    global.document = document
  })

  it('should have correct painting classes for each artwork', () => {
    const paintings = document.querySelectorAll('.painting')
    expect(paintings[0]).toHaveClass('abstract-1')
    expect(paintings[1]).toHaveClass('nature')
    expect(paintings[2]).toHaveClass('geometric')
  })

  it('should have color blocks in abstract painting', () => {
    const colorBlocks = document.querySelectorAll('.abstract-1 .color-block')
    expect(colorBlocks).toHaveLength(3)
    expect(colorBlocks[0]).toHaveClass('red')
    expect(colorBlocks[1]).toHaveClass('blue')
    expect(colorBlocks[2]).toHaveClass('yellow')
  })

  it('should have geometric shapes in geometric painting', () => {
    const triangle = document.querySelector('.geometric .triangle')
    const circle = document.querySelector('.geometric .circle')
    const square = document.querySelector('.geometric .square')
    
    expect(triangle).toBeTruthy()
    expect(circle).toBeTruthy()
    expect(square).toBeTruthy()
  })
})