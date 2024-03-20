<script>
  import { Accordion, AccordionItem } from "flowbite-svelte";
  import { getContext } from "svelte";
  import { Listgroup, ListgroupItem } from "flowbite-svelte";
  import PLagugages from "./PLanguages.svelte";
  import FTechs from "./FTechs.svelte";

  const i18n = getContext("i18n");
</script>

<div
  class="mainBody text-[#8892b0] bg-[#0a192f] p-[20px] flex flex-col justify-center text-left lg:ml-[10%] lg:mr-[10%]"
>
  <div class="workExperience">
      <h2 class="font-bold text-[#bacbff]">{$i18n.t("workExp")}</h2>
    <Accordion
      activeClass="bg-[#8892b0] text-[#0a192f]"
      inactiveClass="hover:text-[#64ffda]"
    >
      <AccordionItem>
        <span slot="header">{$i18n.t("cseaAccenture")}</span>
        <p>{$i18n.t("cseaAccentureDesc")}</p>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">{$i18n.t("aseaAccenture")}</span>
        <p>{$i18n.t("aseaAccentureDesc")}</p>
      </AccordionItem>
    </Accordion>
  </div>
  <div class="education">
    <h2 class="font-bold text-[#bacbff]">{$i18n.t("education")}</h2>
    <Listgroup class="bg-[#0a192f] p-4">
      <ListgroupItem itemDefaultClass="p-2 hover:text-[#64ffda]">{$i18n.t("bTech")}</ListgroupItem>
      <ListgroupItem itemDefaultClass="p-2 hover:text-[#64ffda]">{$i18n.t("12th")}</ListgroupItem>
      <ListgroupItem itemDefaultClass="p-2 hover:text-[#64ffda]">{$i18n.t("10th")}</ListgroupItem>   
    </Listgroup>
  </div>
  <div class="skills">
    <h2 class="font-bold text-[#bacbff]">{$i18n.t("Skills")}</h2>
    <Accordion>
      <AccordionItem>
        <span slot="header">{$i18n.t("planguages")}</span>
        <PLagugages/>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">{$i18n.t("frontEnd")}</span>
        <FTechs/>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">{$i18n.t("backEnd")}</span>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">{$i18n.t("databases")}</span>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">{$i18n.t("tools")}</span>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">{$i18n.t("otherTechs")}</span>
      </AccordionItem>
    </Accordion>
  </div>
</div>
