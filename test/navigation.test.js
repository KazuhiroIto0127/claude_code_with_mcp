import { describe, it, expect, beforeEach } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const detailPages = ['abstract.html', 'nature.html', 'geometric.html']

describe('Navigation and Detail Pages', () => {
  it('should have all required detail page files', () => {
    detailPages.forEach(page => {
      const filePath = join(process.cwd(), page)
      expect(existsSync(filePath), `File ${page} should exist`).toBe(true)
    })
  })

  detailPages.forEach(page => {
    describe(`${page} structure`, () => {
      let document

      beforeEach(() => {
        const html = readFileSync(join(process.cwd(), page), 'utf-8')
          .replace('<link rel="stylesheet" href="style.css">', '')
        document = new DOMParser().parseFromString(html, 'text/html')
        global.document = document
      })

      it('should have navigation back to gallery', () => {
        const navLink = document.querySelector('.nav-link')
        expect(navLink).toBeTruthy()
        expect(navLink.getAttribute('href')).toBe('index.html')
        expect(navLink.textContent).toContain('ギャラリーに戻る')
      })

      it('should have large artwork display', () => {
        const largeFrame = document.querySelector('.large-frame')
        const largePainting = document.querySelector('.large-painting')
        expect(largeFrame).toBeTruthy()
        expect(largePainting).toBeTruthy()
      })

      it('should have artwork information section', () => {
        const infoCard = document.querySelector('.info-card')
        expect(infoCard).toBeTruthy()
        expect(infoCard.querySelector('h2')).toBeTruthy()
      })

      it('should have related works section', () => {
        const relatedWorks = document.querySelector('.related-works')
        expect(relatedWorks).toBeTruthy()
        expect(relatedWorks.querySelector('h3')).toBeTruthy()
      })
    })
  })
})