interface WallProps {
  side: 'left' | 'right';
}

const CodeLine = ({ prefix, tag, children }: { prefix?: string; tag?: string; children?: string }) => (
  <div className="whitespace-nowrap">
    {prefix && <span className="text-wall/70">{prefix}</span>}
    {tag && <span className="text-pur">{tag}</span>}
    {children && <span className="text-bl u">{children}</span>}
  </div>
);

const LeftWall = () => (
  <div className="whitespace-nowrap text-[0.7rem] leading-[1.5] tracking-tight text-tea">
    <CodeLine prefix="&lt;div " tag="class=" children="'room'" />
    <CodeLine prefix="  &lt;h1 " tag="id=" children="'prawal'" />
    <CodeLine prefix="    &lt;span " tag="class=" children="'hello'" />
    <CodeLine prefix="    &lt;/span>" />
    <CodeLine prefix="  &lt;/h1>" />
    <CodeLine prefix="  &lt;p " tag="data-role=" children="'builder'" />
    <CodeLine prefix="  &lt;/p>" />
    <CodeLine />
    <CodeLine prefix="  &lt;ul " tag="class=" children="'projects'" />
    <CodeLine prefix="    &lt;li>" children="anime-wiki" />
    <CodeLine prefix="    &lt;li>" children="pirated-lib" />
    <CodeLine prefix="  &lt;/ul>" />
    <CodeLine />
    <CodeLine prefix="  &lt;a " tag="href=" children="'github'" />
    <CodeLine prefix="  &lt;a " tag="href=" children="'discord'" />
    <CodeLine prefix="&lt;/div>" />
  </div>
);

const RightWall = () => (
  <div className="whitespace-nowrap text-[0.7rem] leading-[1.5] tracking-tight text-tea">
    <CodeLine prefix="~/.bashrc" />
    <CodeLine />
    <CodeLine prefix="prawal=" tag="&gt;" children="()" />
    <CodeLine prefix="  const build = " tag="&gt;" children="()" />
    <CodeLine prefix="    return shrug();" />
    <CodeLine prefix="  ;" />
    <CodeLine />
    <CodeLine prefix="// status: online" />
    <CodeLine prefix="// focus : web" />
    <CodeLine />
    <CodeLine prefix="$ whoami" tag="&gt;" children=" prawal" />
    <CodeLine prefix="$ uptime" tag="&gt;" children=" 24/7" />
    <CodeLine prefix="$ ❯ _" />
  </div>
);

const Wall = ({ side }: WallProps) => {
  return (
    <aside
      aria-hidden="true"
      className={`${side === 'left' ? 'skew-left' : 'skew-right'} fixed top-24 bottom-4 hidden w-40 select-none px-3 py-2 lg:block`}
    >
      <div className="flex h-full items-start overflow-hidden opacity-90">
        {side === 'left' ? <LeftWall /> : <RightWall />}
      </div>
    </aside>
  );
};

export default Wall;
