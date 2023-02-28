import { throttle } from 'lodash-es';

const NAV_HEIGHT = 56;

export function scrollToTarget(target: HTMLElement, isSmooth: boolean) {
  if (!target) return;
  console.log('scrollToTarget', target, isSmooth);

  const targetPadding = parseInt(window.getComputedStyle(target).paddingTop);
  const targetTop =
    window.scrollY +
    target.getBoundingClientRect().top +
    targetPadding -
    NAV_HEIGHT;
  console.log('scrollToTarget', target, isSmooth);
  window.scrollTo({
    left: 0,
    top: targetTop,
    behavior: isSmooth ? 'smooth' : 'auto'
  });
}

export function bindingAsideScroll() {
  console.log('bind');

  const marker = document.getElementById('aside-marker');
  const aside = document.getElementById('aside-container');
  const headers = Array.from(aside?.getElementsByTagName('a') || []).map(
    (item) => decodeURIComponent(item.hash)
  );
  if (!aside) {
    return;
  }

  const activate = (links: HTMLAnchorElement[], index: number) => {
    if (links[index]) {
      const id = links[index].getAttribute('href');
      const tocIndex = headers.findIndex((item) => item === id);

      const currentLink = aside?.querySelector(
        `a[href="${id}"]`
      ) as HTMLAnchorElement;

      if (currentLink) {
        marker.style.top = `${33 + tocIndex * 28}px`;
        marker.style.opacity = '1';
      }
    }
  };

  const setActiveLink = () => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.island-doc .header-anchor')
    ).filter((element) => element.parentElement?.tagName !== 'H1');

    const isBottom =
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight;

    if (isBottom) {
      activate(links, links.length - 1);
      return;
    }

    for (let i = 0; i < links.length; i++) {
      const currentAnchor = links[i];
      const nextAnchor = links[i + 1];
      const scrollTop = Math.ceil(window.scrollY) + NAV_HEIGHT;
      const currentAnchorTop = currentAnchor.parentElement.offsetTop;

      if (!nextAnchor) {
        activate(links, i);
        break;
      }
      if ((i === 0 && scrollTop < currentAnchorTop) || scrollTop === 0) {
        activate(links, 0);
        break;
      }

      const nextAnchorTop = nextAnchor.parentElement.offsetTop;
      if (scrollTop >= currentAnchorTop && scrollTop < nextAnchorTop) {
        activate(links, i);
        break;
      }
    }
  };

  const throttleSetActiveLink = throttle(setActiveLink, 100);

  window.addEventListener('scroll', throttleSetActiveLink);

  return () => {
    window.removeEventListener('scroll', throttleSetActiveLink);
  };
}
