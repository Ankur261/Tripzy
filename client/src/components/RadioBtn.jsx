

export default function RadioBtn({label}) {
    return (
        <div class="inline-flex items-center">
        <label class="relative flex items-center cursor-pointer" for="html">
          <input name="framework" type="radio" class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="html"></input>
          <span class="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          </span>
        </label>
        <label class="ml-2 text-slate-600 cursor-pointer text-sm" for="html">{label}</label>
      </div>
    );
}