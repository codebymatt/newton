export const TOGGLE_HIGHLIGHT = 'TOGGLE_HIGHLIGHT'

export function changeClass(older, newer) {
    return { type: TOGGLE_HIGHLIGHT, older, newer }
}
