export const WHO_I_AM = "Jimmy Leung";

export const WHERE_I_LIVE = 'Tin Shui Wai, Hong Kong';

export const EXTERNAL_ICONS = {
	'terminal-window': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
	trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
	strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
	'paper-plane-tilt': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
	'arrow-right': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
	'arrow-left': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
	code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
	'microphone-stage': `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
	'pencil-line': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
	'rocket-launch': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
	list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
	'moon-stars': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
	sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
	'github-logo': `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
	'linkedin-logo': `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
	'leetcode-logo': `<path d="M143.824 0a14.656 14.656 0 0 0 -10.256 4.672L75.904 66.416l-41.104 44.016a56.176 56.176 0 0 0 -12.896 22.448 57.072 57.072 0 0 0 -1.328 5.472 58.96 58.96 0 0 0 0.656 25.2 62.192 62.192 0 0 0 3.728 10.848 63.344 63.344 0 0 0 13.552 19.392l45.616 44.72 0.416 0.4c23.984 23.088 62.416 22.752 86 -0.784l25.552 -25.52c5.76 -5.76 5.76 -15.088 0.032 -20.848a14.704 14.704 0 0 0 -20.816 -0.032l-25.552 25.52a32.224 32.224 0 0 1 -44.848 0.4l-0.208 -0.208 -45.616 -44.72c-6.96 -6.832 -10.368 -15.664 -10.112 -24.144a28.592 28.592 0 0 1 0.704 -5.584 27.152 27.152 0 0 1 6.608 -12.416L97.392 86.544c11.28 -12.096 34.176 -13.552 47.248 -2.96l37.344 30.192c6.32 5.12 15.584 4.128 20.688 -2.208a14.768 14.768 0 0 0 -2.208 -20.72l-37.328 -30.192c-8.528 -6.896 -18.832 -11.152 -29.584 -12.816l21.488 -23.024A14.768 14.768 0 0 0 143.824 0zm-30.576 136.688a14.72 14.72 0 0 0 -14.72 14.736 14.72 14.72 0 0 0 14.72 14.736H221.76a14.72 14.72 0 0 0 14.72 -14.736 14.72 14.72 0 0 0 -14.72 -14.736z"/>`,
	'codewars-logo': `  <path d="M8.128 130.128l-0.872 -0.416c-1.92 -1.08 -3.416 -2.664 -4.456 -4.712 -1.504 -2.752 -2.168 -5.336 -2.168 -8l0.208 -1.376c0 -2.128 0.544 -4.04 1.504 -5.872l0.872 -1.584c0.416 -0.872 1.04 -1.624 1.584 -2.336 0.664 -0.752 0.752 -1.712 0.544 -2.584l-0.544 -1.712c-0.624 -2.128 -1.04 -4.248 -1.04 -6.376l-0.336 -1.288c0 -2.376 0.624 -4.712 2.128 -6.416l1.08 -1.376c0.752 -1.08 1.92 -1.712 3.208 -2.128 1.04 -0.336 1.792 -1.416 1.92 -2.664l0.208 -3.624c0 -2.872 1.376 -5.544 3.504 -7.504l2.584 -1.92c0.504 -0.504 1.04 -1.04 1.456 -1.92 0.544 -0.624 0.664 -1.504 0.544 -2.128 -0.208 -1.04 0 -1.376 0.544 -1.504 1.712 0.664 2.792 0.456 3.544 -0.416l1.376 -1.792 3.832 -4.288c1.08 -1.04 1.504 -3 0.832 -4.456l-1.248 -2.792c-0.208 -0.624 0 -1.376 0.544 -1.584 1.376 0 2.336 0.504 2.752 1.376l0.416 0.752c0.664 1.288 2.168 1.92 3.208 1.376 2.336 -0.832 4.288 -1.04 6.08 -1.04h3.416c2.336 0 4.248 -1.624 4.712 -4.08 0.416 -2.96 1.456 -5.336 2.96 -6.92 1.624 -1.832 3.416 -3.208 5.544 -4.288 2.792 -1.456 4.504 -3.624 5.04 -6.376 0.752 -3.416 2.544 -5.872 5 -7.456l8.128 -4.584 2.336 -1.416c1.376 -0.832 2.664 -1.92 3.752 -3.208l2.128 -2.544c1.04 -1.08 2.128 -1.792 3.416 -2.128 1.04 -0.336 2.544 -0.544 3.832 -0.416l4.248 0.288c2.128 0 3.832 0.544 5.544 1.288l1.08 0.544c1.08 0.416 2.128 0.208 2.664 -0.544l0.96 -0.544 4.584 -4.792c1.08 -1.08 2.336 -1.504 3.752 -1.288 1.376 0.208 2.752 0.752 4.04 1.416 1.92 1.04 3.504 1.456 5.336 1.456h1.08c2.336 0 4.664 0.336 7.04 0.872l1.584 0.416c1.584 0.416 3.208 -0.208 4.248 -1.504 0.336 -0.544 1.08 -0.624 1.504 -0.208 0.336 0.208 0.416 0.416 0.544 0.752 0.208 2.128 1.504 3.752 3.208 4.248l1.712 0.544c1.792 0.544 3.416 1.712 4.456 3.208 1.08 1.584 2.376 3.208 3.832 4.248l1.08 1.08c1.08 1.08 2.544 1.504 4.04 1.376h6.288c2.584 0 5.04 0.456 7.504 1.504 2.336 1.08 4.792 1.288 7 0.416 2.376 -0.712 4.832 -1.04 7.288 -0.712l4.584 0.712c2.128 0.248 4.248 1.288 5.544 2.92l0.544 0.504c1.04 1.08 2.128 2.456 3.168 3.96 0.664 1.376 2.168 2.128 3.624 2.128h6.624c1.624 0 3.208 0.336 4.504 1.08 1.376 1.04 2.544 2.128 3.624 3.208l1.04 1.376c1.288 1.504 1.92 3.504 1.832 5.664 0 1.712 1.288 3.168 2.96 3.168l2.168 0.248c1.504 0 2.752 1.04 3.504 2.416l1.08 2.168 2.752 6.168c0.456 1.08 0.544 2.128 0.456 3 0 1.04 0.288 1.92 1.04 2.336l1.08 0.752c1.376 1.08 2.128 2.664 1.92 4.504l-0.752 5 -0.208 2.128c-0.208 1.08 0.288 2.456 1.288 3.208 1.584 1.04 2.336 2.456 2.416 4.04v2.128c0 1.08 -0.208 2.376 -1.04 3.208 -0.664 0.872 -1.08 1.92 -1.08 3.208l0.336 2.456c0 1.712 1.04 3.208 2.128 4.248 1.504 1.08 2.336 2.792 2.584 4.504 0.416 2.664 0.504 4.792 0.504 6.92v2.456c0 0.872 0 1.712 0.336 2.544 0.208 0.752 0.752 1.504 1.376 1.96l2.128 1.584c2.168 1.376 3.664 3.208 4.504 5.664 1.08 2.336 1.376 4.792 1.376 7.248v0.832c0 1.92 -0.208 3.96 -0.832 5.752 -0.544 1.96 -0.416 3.752 0.288 5.336 0.872 1.504 1.416 3.208 1.624 5.04 0.416 2.128 0.208 4.248 -0.544 5.96l-0.208 0.752c-0.544 1.288 -1.376 2.456 -2.456 3.416 -1.08 1.08 -2.128 1.712 -2.752 2.456 -0.664 0.624 -1.08 1.712 -0.752 2.664l0.288 1.504c0.544 2.128 0.544 4.248 0 6.168v0.872c-0.416 1.584 -1.04 2.96 -1.712 4.248 -0.752 1.376 -1.792 2.456 -3.168 3.208l-1.624 1.04c-0.752 0.456 -1.288 1.416 -1.288 2.376 0 1.04 -0.416 2.128 -1.04 2.752l-1.624 2.168c-1.04 1.376 -2.416 2.544 -3.92 3.168 -1.504 1.08 -2.792 2.168 -3.752 3.208 -1.08 1.288 -1.92 2.792 -2.336 4.288 -0.416 1.92 -1.92 2.96 -3.544 2.96h-5.752c-1.504 0 -2.872 1.08 -3.504 2.376 -0.752 1.664 -1.504 2.872 -2.456 3.92 -1.08 1.08 -1.712 2.376 -2.168 3.832 -0.208 1.288 -1.248 2.168 -2.336 1.712 -1.376 -0.624 -2.752 0 -3.416 1.08 -1.248 2.128 -2.544 3.752 -3.92 5.128l-0.752 0.624c-1.416 1.08 -3.208 1.92 -4.832 1.92 -1.92 0 -2.872 0.872 -3.168 2.128 -0.336 1.08 -0.544 2.456 -0.664 3.664 -0.208 1.248 -0.624 2.416 -1.04 3.504l-0.544 0.624c-1.08 1.624 -1.92 3.208 -3 4.584l-0.416 0.664c-1.376 1.792 -3.208 3.208 -5.336 3.712 -2.584 0.872 -4.792 1.08 -7.04 1.08h-1.504c-1.04 0 -2.128 0.624 -2.872 1.712l-0.624 1.08 -0.664 1.248 -1.376 2.376c-1.08 1.92 -2.664 3.168 -4.792 3.832 -2.128 0.544 -4.584 0.752 -6.832 0.624l-1.712 -0.208c-1.504 0 -2.872 -0.416 -4.248 -1.08 -1.08 -0.416 -2.584 0 -3.208 1.08 -1.08 1.504 -2.376 2.336 -3.752 2.792l-3.208 1.04c-2.128 0.544 -4.456 0.544 -6.712 0l-1.712 -0.544c-1.04 0 -2.128 -0.504 -3 -1.04 -1.04 -0.544 -2.128 -0.752 -3.168 -0.664l-1.416 0.248c-2.128 0.208 -4.04 0 -5.96 -0.544l-2.872 -0.664c-1.288 -0.416 -2.456 -1.248 -3.208 -2.456 -0.544 -1.04 -1.712 -1.92 -3.208 -2.128h-3.416c-2.128 -0.288 -4.04 -1.04 -5.336 -2.664l-4.248 -4.04 -1.504 -1.288 -2.336 -1.712 -1.376 -1.04c-1.624 -1.08 -3.544 -1.92 -5.584 -2.128l-6.376 -1.08c-0.664 0 -1.08 -0.208 -1.712 -0.336l-2.456 -0.544c-1.08 -0.208 -2.128 -1.04 -2.872 -2.128 -0.624 -1.04 -1.832 -1.504 -2.872 -1.04 -2.128 0.832 -3.832 1.04 -5.544 1.376h-1.504c-2.792 0.208 -5.336 -0.208 -7.92 -1.376 -2.544 -1.08 -4.248 -2.664 -5.832 -4.712 -1.288 -1.832 -3.208 -3.208 -5.584 -3.624l-2.96 -0.624c-2.128 -0.456 -4.288 -1.288 -6.208 -2.584 -2.128 -1.504 -3.208 -2.872 -4.04 -4.584 -0.832 -1.584 -1.376 -3.416 -1.504 -5.336v-0.832c-0.208 -2.168 -1.712 -4.08 -3.712 -4.584 -2.456 -0.752 -4.288 -1.832 -5.872 -3.208 -1.504 -1.416 -2.376 -3.416 -2.376 -5.544l0.248 -4.712c0 -1.832 -0.544 -3.416 -1.832 -4.584 -1.288 -1.288 -2.128 -2.872 -2.128 -4.584l-0.336 -3.832c-0.208 -2.792 -0.752 -5.544 -1.376 -8.336 -0.624 -2.456 0.336 -4.92 2.336 -6.08l0.752 -0.544c1.08 -0.752 1.504 -2.128 0.872 -3.416l-0.872 -1.04c-1.04 -1.08 -2.128 -1.832 -3.208 -2.128 -0.832 -0.248 -1.04 -1.08 -1.04 -1.624l1.04 -1.288c0.664 -0.752 0.544 -1.92 0 -2.544 -0.832 -0.872 -1.248 -1.92 -1.376 -3l-0.208 -7.456c0 -1.504 0.208 -3 0.624 -4.456 0.456 -1.288 0 -2.792 -1.248 -3.416zM113.712 116.04c0.752 -0.752 0.624 -2.128 0 -2.664 -1.08 -0.832 -1.832 -1.792 -2.456 -2.872l-1.08 -1.712c-0.712 -1.376 -1.664 -2.544 -2.752 -3.624l-0.208 -0.208c-1.08 -0.832 -1.832 -1.92 -2.456 -3.208 -0.544 -1.04 -0.544 -2.128 0 -3.208l0.624 -1.04c0.664 -1.08 1.08 -2.584 1.08 -3.832v-0.456c0 -1.04 -0.416 -2.128 -1.08 -3.168 -0.416 -0.872 -0.832 -1.92 -1.04 -3v-0.624c-0.336 -1.288 0 -2.664 0.832 -3.752 0.872 -1.376 1.504 -2.664 1.832 -4.248v-0.248c0.416 -1.04 0.208 -2.416 -0.456 -3.504 -0.624 -1.08 -0.832 -2.128 -0.416 -3.416l0.752 -2.128c0.624 -1.92 1.624 -3.624 2.872 -5.128l1.504 -1.584 1.08 -1.288 0.624 -0.624c0.624 -0.664 0.752 -1.712 0.208 -2.584 -0.544 -1.08 -0.832 -2.128 -0.624 -3.208l0.208 -1.504c0.336 -2.128 1.08 -4.248 2.456 -5.96l0.416 -0.416c1.584 -2.128 3.624 -3.544 5.96 -4.288l2.92 -1.04c1.248 -0.416 2.128 -1.832 2.128 -3.208 0 -1.712 0.544 -3.208 1.496 -4.584l0.504 -0.544c1.08 -1.792 2.376 -3.624 3.208 -5.544l0.752 -1.376c0.208 -0.336 0.336 -0.752 0.336 -1.08 0 -1.792 -1.08 -3.416 -2.792 -3.504l-4.664 -0.336c-2.664 -0.208 -5.336 0 -7.92 0l-9.04 1.08c-1.416 0 -2.456 1.04 -2.584 2.544 0 1.504 -1.08 2.792 -2.336 3.208l-3.832 1.04 -1.08 0.336 -3.208 1.08c-2.336 0.752 -4.248 2.456 -5.336 4.792l-0.832 1.376c-1.08 2.376 -2.872 4.288 -5.128 5.664 -2.128 1.376 -3.208 3.624 -3.416 6.168v1.08c-0.208 2.128 -0.872 4.248 -2.128 5.752l-0.544 0.872c-0.872 1.04 -1.08 2.456 -0.544 3.624 0.544 1.248 0.872 2.664 0.752 4.04v5.664c0 1.504 -1.08 2.752 -2.128 3.168 -1.504 0.544 -2.456 1.712 -2.872 3.208l-0.544 2.128c-0.416 2.168 0.336 4.288 2.128 5.584 1.712 1.248 2.792 3.168 3.208 5.544v1.92c0.336 2.128 1.504 4.248 3.416 5.336 1.92 1.288 3.416 3.208 4.248 5.336l0.544 1.712c0.872 2.336 2.792 3.712 4.92 3.92h0.624c1.92 0 3.624 1.08 4.712 2.792 1.04 1.712 2.752 2.872 4.664 3.208l3 0.832c1.832 0.544 3.544 1.504 4.92 2.872l0.208 0.248c1.08 0.832 2.792 0.712 3.752 -0.456l0.752 -0.832zM125.872 106.248c1.04 0.624 2.128 0.288 2.544 -0.664l0.336 -0.504c0.752 -1.504 1.712 -3 2.752 -4.288l2.168 -3.208c0.288 0 0.416 -0.208 0.504 -0.416l2.584 -3.416c1.08 -1.04 2.336 -1.792 3.832 -1.792 1.376 0 2.584 -0.752 3.208 -2.128 0.416 -1.504 1.04 -2.92 2.336 -4.08l0.544 -0.624c1.08 -1.08 2.128 -1.624 3.208 -2.128 1.376 -0.208 2.664 -0.456 3.96 -0.456h3.168c1.288 0 2.376 -0.504 3 -1.584s1.584 -1.792 2.664 -2.336l1.08 -0.456c1.712 -0.712 3.624 -1.248 5.544 -1.456l2.128 -0.208c1.288 0 2.664 0 3.96 0.712 1.04 0.752 2.456 0.664 3.504 -0.208l0.752 -0.416c1.584 -1.08 3.416 -1.92 5.336 -2.128h0.208c2.128 -0.416 4.04 -0.416 6.208 -0.336h1.04c2.128 0.336 3.96 1.08 5.336 2.664l0.336 0.416c1.08 1.08 2.752 1.96 4.248 1.96h1.832c0.544 0 1.04 -0.248 1.376 -0.752 0.336 -0.336 0.872 -0.664 1.376 -0.664h1.08c1.504 0 2.872 0.416 4.248 0.872l1.832 0.752c1.712 0.504 3.504 1.04 5.336 1.248h1.288c0.832 0 1.376 -0.504 1.376 -1.248 0 -1.08 -0.208 -2.168 -0.752 -3l-0.752 -1.712c-0.832 -1.376 -1.504 -2.872 -2.128 -4.248l-0.208 -0.544c-0.544 -1.08 -0.544 -2.128 0 -3.208v-0.544c0.208 -0.832 -0.208 -1.792 -1.08 -2.128h-0.832c-1.712 -0.544 -3.208 -1.504 -4.288 -2.872l-1.04 -1.08c-1.08 -1.04 -1.712 -2.664 -2.168 -4.248 -0.504 -1.376 -1.664 -2.456 -3.168 -2.456h-4.504c-1.584 -0.208 -3 -1.08 -3.96 -2.336l-0.416 -0.544c-0.752 -1.08 -1.376 -2.336 -1.792 -3.624 -0.544 -1.08 -1.712 -1.712 -2.792 -1.376l-1.288 0.416c-2.128 0.752 -4.248 1.04 -6.376 0.832l-1.712 -0.208c-1.832 0 -3.544 -0.752 -4.92 -1.792l-1.08 -0.752c-0.832 -0.664 -1.664 -1.08 -2.664 -1.504 -1.04 -0.416 -1.92 -0.208 -2.544 0.544l-0.544 0.624c-1.04 1.08 -2.544 1.92 -4.04 2.128l-5.752 0.336c-1.08 0 -2.128 0.544 -2.872 1.288 -0.872 0.752 -1.832 1.248 -2.92 1.456h-0.208c-1.04 0 -2.128 0.752 -3.168 1.504v0.208c-1.08 1.08 -2.456 1.624 -3.872 1.624l-0.416 0.208c-1.288 0 -2.544 0 -3.832 0.336h-1.288c-1.792 0.288 -3.208 1.792 -3.624 3.712l-0.416 2.456c-0.336 1.712 -1.08 3.208 -2.128 4.584 -1.08 1.288 -2.376 2.128 -3.96 2.128h-1.792c-1.08 0.248 -2.168 1.416 -1.96 2.664 0.248 1.832 0 3.416 -0.288 5.04l-0.416 1.792c-0.456 1.624 -1.504 2.872 -2.92 3.416l-0.624 0.336h-0.208c-0.624 0.416 -1.08 1.376 -0.544 2.128 0.664 1.08 0.872 2.128 0.752 3.208l-0.336 3.416c0 1.248 -0.504 2.456 -1.04 3.504 -0.664 1.08 -0.664 2.128 -0.208 3.208l1.04 2.336c0.544 1.08 0.664 2.168 0.336 3.416 -0.336 1.08 -0.544 2.128 -0.416 3.208 0 1.08 0.624 2.128 1.504 2.584zM210.128 183.376c1.08 1.04 2.664 1.456 3.96 0.624l2.128 -1.376c1.08 -0.752 1.92 -1.832 2.336 -3.208v-0.208l1.08 -3.208 0.624 -1.08 0.456 -1.04 0.416 -0.752c0.416 -0.872 1.04 -1.504 2.128 -1.832l0.416 -0.208c0.872 -0.208 1.416 -1.04 1.416 -1.92 0 -1.04 0.504 -1.92 1.04 -2.664l0.872 -0.752 2.128 -2.752v-0.208c0.624 -0.872 1.04 -1.832 1.288 -2.92 0.208 -1.04 0 -2.128 -0.456 -3.168l-0.208 -0.456c-0.416 -1.04 -0.624 -1.792 -0.752 -2.752l-0.288 -3 -0.336 -3.208c0 -1.04 0.416 -2.128 1.08 -3.168 0.712 -0.872 1.248 -1.96 1.712 -3v-0.416l0.208 -0.208c0.208 -1.08 -0.336 -2.168 -1.288 -2.168 -1.08 -0.504 -2.128 -1.376 -2.456 -2.664l-0.336 -0.624c-0.504 -1.92 -0.832 -3.832 -0.832 -5.752l0.208 -5.336v-0.336c0 -1.792 -1.504 -3.208 -3.208 -3.208h-0.208c-2.128 0 -3.832 -0.624 -5.336 -2.128l-0.832 -1.08 -2.168 -2.416 -2.752 -3.208c-1.08 -1.504 -2.128 -2.792 -3.544 -4.08 -1.04 -1.04 -2.664 -2.128 -4.248 -2.336l-2.128 -0.336c-1.08 -0.208 -2.456 -0.712 -3.624 -1.456 -0.872 -0.664 -2.128 -0.456 -3 0.416l-1.376 1.504 -0.664 0.416c-0.752 0.208 -1.456 -0.208 -1.792 -1.08 -0.416 -1.248 -0.416 -2.752 0.208 -4.04v-0.624c0 -0.752 -0.624 -1.288 -1.288 -1.08h-1.712c-1.92 0 -3.832 -0.208 -5.624 -1.04l-1.08 -0.456c-1.08 -0.544 -2.336 -0.832 -3.504 -0.832 -1.08 0 -2.168 0.208 -3.208 0.832l-0.416 0.336c-1.288 0.832 -2.792 1.288 -4.288 1.376h-3.504c-1.624 0 -3.208 0.544 -4.288 1.416 -1.376 0.832 -2.872 1.376 -4.456 1.664l-2.872 0.456c-1.288 0.288 -2.664 0.832 -3.872 1.792 -1.04 1.08 -2.544 1.712 -3.92 2.128l-0.544 0.248c-1.712 0.504 -3.208 1.584 -4.248 3.168l-1.288 1.288c-0.752 1.08 -0.752 2.336 0 3.416 0.624 1.08 1.92 1.376 3.208 1.08l1.584 -0.664c0.832 -0.288 1.832 0 2.544 0.416 0.664 0.544 1.624 0.872 2.584 0.752l2.664 -0.288c1.504 0 3 0 4.456 0.416 1.624 0.544 3 1.08 4.288 2.128 1.288 1.08 2.664 1.504 4.248 1.712 1.624 0.208 3.208 0.544 4.712 1.08l1.04 0.208c1.08 0.336 1.96 1.04 2.584 2.128 0.544 0.872 1.04 2.128 1.04 3.208v0.336c0 1.248 1.08 2.128 2.168 2.128h0.624c1.712 0 3.544 0.208 5.336 0.752l0.752 0.288c1.08 0.456 2.128 1.08 2.872 2.168 0.872 1.04 1.376 2.128 1.712 3.168l0.336 1.504c0.288 1.624 0.416 3.208 0.416 4.92v0.544c0 1.04 0.752 2.128 1.92 2.544 1.08 0.208 2.336 0.664 3.544 1.288l0.504 0.208c1.416 0.832 2.792 1.92 3.832 3.208l0.544 0.752c1.416 1.584 2.128 3.624 2.128 5.624v0.752c0 1.624 -0.288 3.208 -0.832 4.712 -0.416 1.288 0 2.792 1.376 3.208l0.752 0.544c1.624 0.624 3 1.792 4.04 3.168 1.08 1.624 1.504 3.416 1.504 5.336v3.208c-0.208 1.08 -0.504 1.92 -1.04 2.664s-0.544 1.832 0 2.584l0.624 1.04zM141.872 128.752h-0.208c-0.456 0 -0.664 0.544 -0.544 1.08l0.416 2.128c0.416 1.712 0.624 3.416 0.872 5.128 0.208 1.712 1.04 3.168 2.336 4.248h0.416c1.624 1.288 2.584 3.208 2.664 5.128v5.336c-0.208 1.04 0 2.128 0.664 3l0.504 0.504c1.08 1.288 1.504 2.792 1.624 4.288l0.288 5.872c0 1.376 -0.832 2.544 -2.128 2.752l-1.04 0.208c-0.752 0 -1.08 0.872 -1.08 1.624 0 0.832 0.336 1.792 0.624 2.664v0.208c0.336 1.04 0.456 2.128 0.336 3.208l-0.416 2.872c-0.416 2.128 -1.08 4.04 -2.128 5.96l-0.752 1.288c-0.544 1.04 -1.288 1.712 -2.168 2.128 -1.04 0.416 -1.792 1.288 -2.128 2.336l-0.832 3.832c-0.544 2.168 -1.504 4.288 -2.792 6.416h-0.208c-1.288 1.712 -2.872 3.208 -4.792 4.248l-1.288 0.872 -3.208 1.584c-1.04 0.456 -1.712 1.416 -1.92 2.584l-0.504 3.504c-0.336 2.128 -1.08 3.96 -2.584 5.336l-1.376 1.624 -1.624 1.584 -1.584 1.712c-1.288 1.504 -3.208 2.128 -5.336 1.832l-3.832 -0.752 -3.544 -0.456h-0.96c-0.416 0.456 -0.504 1.08 -0.208 1.712 0.752 1.288 1.92 2.168 3.208 2.168l2.336 0.416c1.08 0 2.376 0.544 3.416 1.04 1.08 0.752 2.128 1.288 3.416 1.624h0.208c1.416 0.544 2.872 0.624 4.288 0.544l1.584 -0.248c1.832 -0.208 3.544 0 5 0.664l1.288 0.416c0.544 0.208 1.376 0 1.92 -0.544 0.664 -0.624 1.288 -1.04 2.128 -1.376l0.872 -0.208c1.376 -0.416 2.752 -0.664 4.248 -0.664h0.872c1.248 0 2.456 0.248 3.504 0.872l0.416 0.208c0.752 0.336 1.624 0 2.168 -0.624 0.288 -0.752 1.04 -1.504 1.792 -2.128l2.664 -1.832 1.712 -1.08 0.872 -0.504c1.04 -0.752 2.544 -1.08 3.832 -1.08l3.832 -0.336c1.504 -0.208 2.792 -1.248 3.208 -2.752 0.416 -1.624 1.04 -3.208 2.128 -4.584 1.08 -1.416 2.128 -2.584 3.208 -3.624 1.376 -1.08 2.752 -1.624 4.248 -1.712h0.872c1.712 -0.336 2.96 -1.92 2.872 -3.624v-7.168c0.208 -1.04 0.624 -2.456 1.248 -3.504l2.168 -3.208 0.832 -1.08c0.664 -0.544 1.08 -1.248 1.832 -2.128l1.04 -1.376c0.664 -1.08 0.664 -2.456 -0.208 -3.416 -1.04 -1.08 -1.584 -2.584 -1.792 -4.04v-0.456c-0.208 -1.712 -0.208 -3.504 0.288 -5.336v-0.504c0.544 -1.416 1.288 -2.792 2.168 -4.08 0.832 -1.04 0.712 -2.544 -0.336 -3.416l-1.832 -1.584c-1.504 -1.288 -2.336 -3.208 -2.544 -5.128l-0.208 -2.128c0 -0.664 0 -1.376 -0.208 -2.128l-0.208 -1.624c-0.248 -1.792 -1.288 -3.208 -2.792 -4.248l-0.752 -0.208c-1.08 -0.664 -2.128 -1.624 -3 -2.872 -0.832 -1.08 -1.248 -2.584 -1.584 -4.08l-0.336 -1.792c0 -0.664 -0.416 -1.08 -1.04 -1.376l-5.128 -1.624c-1.08 -0.208 -2.128 -1.04 -2.872 -1.792h-0.208c-0.664 -0.872 -1.712 -0.872 -2.376 -0.248l-1.04 1.08c-0.208 0.336 -0.456 0.416 -0.752 0.336 -0.664 0 -1.08 -0.544 -0.872 -1.08 0.208 -1.712 -0.416 -3.416 -1.792 -4.456l-1.416 -1.08 -3.168 -2.128c-0.872 -0.336 -2.168 0 -2.584 1.04l-0.416 0.664c0 0.208 -0.336 0.288 -0.416 0.416 -0.456 0 -1.08 0 -1.08 -0.544l-0.336 -0.544c-0.288 -0.624 -1.04 -1.04 -1.712 -1.248zM129.08 139.416l-0.544 -0.544c-0.544 -0.416 -1.08 -0.336 -1.624 0.208 -0.752 1.288 -1.376 2.664 -1.712 4.08v0.208c-0.288 1.376 -1.584 2.336 -2.872 2.128h-1.248c-1.504 0 -2.664 1.288 -2.664 2.752 0 1.92 -0.664 3.872 -1.832 5.336l-0.624 0.664c-1.08 1.376 -2.664 2.336 -4.288 2.872l-0.832 0.208c-1.08 0.336 -1.92 1.08 -2.128 2.336 0 1.08 -0.664 2.168 -1.504 3l-1.08 0.832c-1.288 1.416 -3.208 2.168 -5.128 2.376l-5.336 0.544c-1.712 0 -3.168 1.04 -4.248 2.664 -1.08 1.584 -2.664 2.664 -4.248 2.872l-2.376 0.208c-1.712 0.208 -3.504 0.208 -5.336 -0.208l-1.04 -0.208 -2.92 -0.752c-1.04 -0.336 -1.92 0 -2.544 0.752l-1.08 1.376c-1.376 1.584 -3.376 2.336 -5.336 2.128l-6.92 -0.832c-1.08 0 -1.92 -0.544 -2.872 -1.08 -1.08 -0.624 -1.832 -1.376 -2.584 -2.128l-2.664 -3.208c-0.288 -0.208 -0.832 -0.336 -1.376 -0.208l-1.504 0.624 -5.96 1.504c-1.08 0.336 -2.456 0 -3.504 -0.624 -1.08 -0.872 -2.376 -1.08 -3.664 -1.08h-1.376c-1.288 0.336 -2.128 1.712 -1.712 3l0.416 2.128c0.336 1.08 0.248 2.336 -0.288 3.416s-0.416 2.128 0.288 3.208l0.664 0.832c0.832 1.288 2.128 2.376 3.208 3.416 1.04 1.08 2.128 2.128 2.96 3.544l1.624 2.872c0.832 1.504 2.128 2.336 3.832 2.336 1.584 0 3.208 0.544 4.456 1.584l3.208 3c0.872 0.752 2.128 0.872 3 0.208l0.544 -0.208c0.624 0 1.04 0.416 1.04 1.08v0.544c0 1.376 1.08 2.664 2.456 3.168l4.792 1.08c1.712 0.544 3.416 1.08 5.04 2.128h0.832c0.872 0 1.624 -0.752 1.504 -1.712v-3.712c0 -1.08 0.416 -2.168 1.288 -2.584l0.544 -0.208c0.504 0.208 1.04 0.624 0.832 1.08v1.792c0 1.376 0.416 2.664 1.376 3.624 1.08 1.08 2.456 1.288 3.624 0.872 1.288 -0.544 2.584 -0.664 3.96 -0.544l3.96 0.208c1.92 0.208 3.712 0 5.336 -0.752 1.92 -0.624 3.504 -1.504 5 -2.664l0.624 -0.416 3.208 -2.872c1.08 -1.08 2.456 -1.624 3.752 -1.624h4.248c2.128 -0.208 4.08 -2.128 4.288 -4.248l0.416 -2.128c0 -1.416 0.624 -2.664 1.584 -3.752 1.08 -1.08 2.128 -1.712 3.208 -2.128l1.288 -0.544c1.792 -0.752 3.208 -2.336 3.832 -4.248l0.624 -2.584c0.544 -2.128 1.624 -4.248 3.208 -5.624l0.208 -0.248c1.288 -1.04 1.504 -3.168 0.664 -4.664l-0.336 -0.752c-0.752 -1.08 -0.872 -2.664 -0.336 -4.04 0.544 -1.504 1.08 -2.792 1.92 -4.08l1.08 -1.504c0.416 -0.832 0.416 -2.128 -0.208 -2.872 -0.664 -0.832 -1.08 -1.92 -1.08 -2.96l-0.208 -1.504v-3.624c0.208 -1.08 0 -2.456 -0.336 -3.544l-0.416 -1.248zM113.832 131.288v-0.288c0 -1.08 -0.664 -1.712 -1.504 -1.712h-2.792c-1.04 0.208 -2.128 0.208 -3 0h-4.792c-2.456 0 -4.792 -0.456 -7.128 -1.08l-2.584 -0.624 -2.128 -0.664 -4.792 -1.584c-2.584 -0.752 -4.504 -2.456 -5.664 -4.792l-0.544 -1.08c-0.752 -1.584 -2.336 -2.456 -3.92 -2.128 -1.832 0 -3.624 0 -5.336 -0.832l-1.288 -0.544c-2.456 -1.08 -4.248 -3.208 -4.248 -6.08l-0.456 -2.872c-0.288 -1.504 -1.248 -2.872 -2.544 -3.416 -1.504 -0.664 -2.872 -1.504 -4.288 -2.456l-0.504 -0.336c-1.624 -1.288 -3 -2.96 -3.752 -5l-0.208 -0.624c-0.544 -1.712 -0.624 -3.544 -0.208 -5.336l0.208 -0.664c0.416 -1.376 0.544 -2.752 0.544 -4.248 0 -1.288 -0.544 -2.584 -1.504 -3.544l-1.504 -1.376c-1.712 -1.376 -2.752 -3.416 -2.872 -5.664 -0.208 -2.336 -0.208 -4.584 0.208 -6.832v-0.624c0 -1.288 -1.08 -2.128 -2.128 -2.128h-0.336c-1.376 0 -2.544 0.832 -3.208 2.128 -0.504 1.504 -1.376 2.664 -2.336 3.832l-0.416 0.544 -3.208 3.208c-1.08 1.04 -1.712 2.664 -1.92 4.248 -0.208 1.624 -0.624 3.208 -1.288 4.712l-0.208 0.544c-0.544 1.248 -1.376 2.456 -2.456 3.208 -1.04 0.832 -1.792 2.128 -1.792 3.376l-0.208 4.92c0 2.128 -0.336 4.288 -1.08 6.416l-0.208 0.832c-0.544 1.416 0 2.872 1.288 3.544l4.456 1.92 0.416 0.208c0.336 0 0.456 0.208 0.544 0.544 0.336 0.416 0 1.04 -0.336 1.04l-1.04 0.544c-0.624 0.208 -1.08 0.872 -1.288 1.624l-0.208 1.04v0.208l-1.08 6c-0.208 0.832 -0.208 1.792 -0.208 2.752 0 0.872 0.544 1.624 1.288 1.92l2.336 1.08c1.08 0.624 2.376 1.376 3.208 2.128l1.08 0.872c0.288 0.416 0.832 0.832 1.248 1.04l0.456 0.416c0.752 0.664 1.248 1.504 1.504 2.456l1.04 4.792c0 1.288 1.08 2.376 2.128 2.664l1.712 0.544c0 0 0.336 0 0.544 0.208l2.128 0.664c1.712 0.544 3.208 1.504 4.504 2.752 1.288 1.08 2.544 2.456 3.624 3.96l0.416 0.416c0.872 1.08 2.128 1.624 3.416 1.288s2.664 -0.416 4.04 -0.416h1.624c1.04 0 2.456 0.288 3.624 1.04 1.04 0.664 2.456 1.08 3.712 1.624h0.336c1.288 0.544 2.664 0.288 3.752 -0.416 1.04 -0.872 2.456 -1.288 3.832 -1.288l5 0.288c1.08 0 2.128 -0.208 2.664 -1.04h0.208l1.832 -1.712 0.544 -0.544c0.832 -1.04 2.128 -1.504 3.376 -1.584h4.832c1.248 0 2.456 -1.08 2.96 -2.128 0.544 -1.08 1.624 -1.96 2.872 -2.168l2.168 -0.416c0.832 0 1.584 -0.752 1.92 -1.712 0.288 -1.04 0.832 -1.92 1.584 -2.544l1.712 -1.712c1.08 -1.08 1.624 -2.128 1.832 -3.416z"/>
`,
	'email-logo': '<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z">',
};

export type ExternalIconLabel = keyof typeof EXTERNAL_ICONS;

/** Icon links to social media — edit these with links to your profiles! */
export const EXTERNAL_LINKS: { label: string; href: string; icon: ExternalIconLabel }[] = [
	{ label: 'GitHub', href: 'https://github.com/hkleungai', icon: 'github-logo' },
	{ label: 'Linkedin', href: 'https://www.linkedin.com/in/jimmy-leung-b20253272', icon: 'linkedin-logo' },
	{ label: 'Email', href: 'mailto:jimmy.leung.hk@outlook.com', icon: 'email-logo' },
	{ label: 'LeetCode', href: 'https://leetcode.com/jimmy-leung', icon: 'leetcode-logo' },
	{ label: 'CodeWars', href: 'https://www.codewars.com/users/hkleungai', icon: 'codewars-logo' },
];

export const SKILLS: { heading: string; description: string; icon: ExternalIconLabel }[] = [
	{ 
		heading: 'Full Stack Engineer',
		description: 'Work in & Contribute to <b>both frontend and backend</b> on modern web',
		icon: 'terminal-window',
	},
	{ 
		heading: 'Problem Solver', 
		description: '<b>Analyze & Deliver solutions</b> in enterprise-scaled project', 
		icon: 'trophy',
	},
	{ 
		heading: 'Team Player', 
		description: '<b>Cooperate & Communicate</b> with colleagues in a professional manner',
		icon: 'strategy',
	},
];
