<script>
  import { Accordion, AccordionItem } from "flowbite-svelte";
  import {getContext} from "svelte";
  
  const i18n = getContext("i18n");
</script>

<div
  class="mainBody text-[#8892b0] bg-[#0a192f] p-[20px] flex flex-col justify-center text-left lg:ml-[10%] lg:mr-[10%] h-[75vh]"
>
  <div class="workExperience">
    <h2>{$i18n.t("workExp")}</h2>
      <Accordion activeClass="bg-[#8892b0] text-[#0a192f]" inactiveClass= "hover:text-[#64ffda]">
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
    <h2>{$i18n.t("education")}</h2>
      <Accordion activeClass="bg-[#8892b0] text-[#0a192f]" inactiveClass= "hover:text-[#64ffda]">
      <AccordionItem>
        <span slot="header">{$i18n.t("bTech")}</span>
        <p>{$i18n.t("cseaAccentureDesc")}</p>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">{$i18n.t("aseaAccenture")}</span>
        <p>{$i18n.t("aseaAccentureDesc")}</p>
      </AccordionItem>
    </Accordion>
  </div>
</div>
