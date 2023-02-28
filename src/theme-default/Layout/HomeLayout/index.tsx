import { usePageData } from '@runtime';
import HomeFeature from 'theme-default/components/HomeFeature';
import HomeHero from 'theme-default/components/HomeHero';

function HomeLayout() {
  const { frontmatter } = usePageData();
  return (
    <div>
      <HomeHero hero={frontmatter.hero} />
      <HomeFeature features={frontmatter.features} />
    </div>
  );
}

export default HomeLayout;
