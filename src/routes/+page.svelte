<script>
  import { getContext } from "svelte";

  const i18n = getContext("i18n");
</script>

<div class="mainBody text-[#8892b0] bg-[#0a192f] p-[20px] flex flex-col justify-center text-left lg:ml-[10%] lg:mr-[10%] h-[75vh]">
  <p class="hiText text-[#64ffda] p-2">{$i18n.t("hiText")}</p>
  <h1 class="font-bold text-6xl myHeader text-[#bacbff]  px-2 pb-4 hover:underline hover:underline-offset-[15px]">{$i18n.t("myHeader")}</h1>
  <h2 class="p-2">{$i18n.t("welcomeText")}</h2>
  <div class="p-2 myContext">
    <p>{$i18n.t("myContext")}</p>
  </div>
  <div class="p-2 moreLinks">
    <button class="mx-1 border p-2 rounded-xl hover:text-[#64ffda] hover:border-[#64ffda]">
      {$i18n.t("moreAboutMe")}
    </button>
    <button class="mx-1 border p-2 rounded-xl hover:text-[#64ffda] hover:border-[#64ffda]">
      {$i18n.t("myProjects")}
    </button>
    <button class="mx-1 border p-2 rounded-xl hover:text-[#64ffda] hover:border-[#64ffda]">
      {$i18n.t("contactMe")}
    </button>
  </div>
</div>


