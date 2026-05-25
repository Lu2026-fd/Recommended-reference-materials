export default function LiteratureRecommendationPage() {
  const papers = [
    {
      id: 1,
      title:
        'YOLK PROTEIN UPTAKE IN THE OOCYTE OF THE MOSQUITO AEDES AEGYPTI',
      authors: 'ROTH TF, PORTER KR.',
      journal: 'J Cell Biol. 1964 Feb;20(2):313-32.',
      doi: '10.1083/jcb.20.2.313',
      note:
        '首次观察到 coated pits：研究利用电子显微镜观察蚊子卵母细胞摄取卵黄蛋白的过程，首次清晰记录 coated pits 与 coated vesicles 的形成过程，为后续“受体介导内吞作用”研究奠定了重要基础。',
      link: 'https://pubmed.ncbi.nlm.nih.gov/14126875/',
    },
    {
      id: 2,
      title:
        'Endocytosis by random initiation and stabilization of clathrin-coated pits',
      authors:
        'Ehrlich M, Boll W, Van Oijen A, Hariharan R, Chandran K, Nibert ML, Kirchhausen T.',
      journal: 'Cell. 2004 Sep 3;118(5):591-605.',
      doi: '10.1016/j.cell.2004.08.017',
      note:
        '网格蛋白小窝随机生成与解体：研究通过活细胞荧光显微成像发现，clathrin-coated pits 会在细胞膜上随机形成，只有成功捕获货物并招募足够蛋白后才能稳定成熟，否则会迅速解聚。',
      link: 'https://pubmed.ncbi.nlm.nih.gov/15339664/',
    },
    {
      id: 3,
      title:
        'The first five seconds in the life of a clathrin-coated pit',
      authors:
        'Cocucci E, Aguet F, Boulant S, Kirchhausen T.',
      journal: 'Cell. 2012 Aug 3;150(3):495-507.',
      doi: '10.1016/j.cell.2012.05.047',
      note:
        '成像技术进展后的观察：研究聚焦 clathrin-coated pits 形成最初 5 秒内的动态过程，提出存在一个早期“checkpoint”阶段，用于决定哪些结构能够继续成熟形成真正的内吞囊泡。',
      link: 'https://pubmed.ncbi.nlm.nih.gov/22863004/',
    },
  ];

  const relatedArticles = [
    {
      title: '细胞内吞作用的多途径机制解析',
      link: 'https://mp.weixin.qq.com/s/xSKWqyAX-5EhbbuRFs5OsQ?scene=1',
    },
    {
      title: '内吞作用依赖于一个隐秘的内循环回路',
      link: 'https://mp.weixin.qq.com/s/v-rygZBmJw2AomIqKldUQw?scene=1',
    },
    {
      title: '3D 数字器官重构新算法',
      link: 'https://mp.weixin.qq.com/s/QtdDIwV4RPKtDXXzw_KFwg',
    },
    {
      title: 'AI 模拟细胞变化与通讯研究',
      link: 'https://mp.weixin.qq.com/s/qqWPXeMcLpt0_g6q3OOsew',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-2xl">
        <header className="mb-10 border-b pb-6">
          <h1 className="text-4xl font-bold text-slate-800">
            相关文献推荐
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            关于细胞内吞作用与 clathrin-coated pits 的经典文献与扩展阅读
          </p>
        </header>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-slate-700">
            核心论文
          </h2>

          <div className="grid gap-6">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                    文献 {paper.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {paper.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  <strong>作者：</strong>
                  {paper.authors}
                </p>

                <p className="mt-2 text-slate-600">
                  <strong>期刊：</strong>
                  {paper.journal}
                </p>

                <p className="mt-2 text-slate-600">
                  <strong>DOI：</strong>
                  {paper.doi}
                </p>

                <div className="mt-4 rounded-2xl bg-yellow-50 p-5 leading-8 text-yellow-900 shadow-sm">
                  <h4 className="mb-2 text-lg font-semibold">研究内容解读</h4>
                  <p className="text-base">{paper.note}</p>
                </div>

                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-xl bg-slate-800 px-5 py-3 text-white transition hover:bg-slate-700"
                >
                  查看 PubMed 文献
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-700">
            其他相关内容
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {relatedArticles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-lg font-semibold text-slate-800">
                  {article.title}
                </div>
                <div className="mt-3 text-sm text-blue-600">
                  点击查看文章 →
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t pt-6 text-center text-sm text-slate-500">
          Literature Recommendation Webpage · Built with React + Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
