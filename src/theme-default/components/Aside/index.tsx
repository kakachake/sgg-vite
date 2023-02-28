import { useRef, useEffect } from 'react';
import { Header } from 'shared/types';
import {
  bindingAsideScroll,
  scrollToTarget
} from 'theme-default/logic/asideScroll';
import { useHeaders } from 'theme-default/logic/useHeaders';

interface AsideProps {
  toc: Header[];
}

function Aside(props: AsideProps) {
  const { toc = [] } = props;

  const headers = useHeaders(toc);

  const hasOutline = toc.length > 0;

  useEffect(() => {
    const unbind = bindingAsideScroll();
    return () => {
      unbind();
    };
  }, []);

  const markerRef = useRef<HTMLDivElement>(null);

  function renderHeader(header: Header) {
    const { id, text, depth } = header;
    return (
      <li
        key={id}
        className="block leading-7 text-text-2 hover:text-text-1"
        transition="color duration-300"
        style={{
          paddingLeft: (depth - 2) * 12
        }}
      >
        <a
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById(header.id);
            scrollToTarget(target, true);
          }}
        >
          {text}
        </a>
      </li>
    );
  }

  return (
    <div
      flex="~ col 1"
      style={{
        width: 'var(--island-aside-width)'
      }}
    >
      <div>
        {hasOutline && (
          <div
            id="aside-container"
            className="relative divider-left pl-4 text-13px font-medium"
          >
            <div
              ref={markerRef}
              id="aside-marker"
              className="absolute top-33px opacity-0 w-1px h-18px bg-brand"
              style={{
                left: '-1px',
                transition:
                  'top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s'
              }}
            ></div>
            <div leading-7="~" text="13px" font="semibold">
              ON THIS PAGE
            </div>
            <nav>
              <ul relative="~">{headers.map(renderHeader)}</ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Aside;
