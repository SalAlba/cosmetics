import {TagModelClass} from 'ngx-chips/core/accessor';

export function validateTags(tags: TagModelClass[]) {
  tags.forEach((t) => {
    if (!t.value.startsWith('#')){
      t.value = '#' + t.value;
      t.display = '#' + t.display;
    }
    t.value = t.value.toLowerCase();
    t.display = t.display.toLowerCase();
  });
  return tags;
}

export function getLevelClass(checkLVL: string, levels: string[]) {
  if (levels) {
    switch (checkLVL) {
      case levels[0]:
        return 'badge-success';
      case levels[1]:
        return 'badge-warning';
      case levels[2]:
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  } else {
    return 'badge-secondary';
  }
}

export function getLevelClassIfCheckLvlEqualsSelectedLvl(checkLVL: string, selectedLvl: string, levels: string[]) {
  switch (checkLVL) {
    case levels[0]:
      return (!selectedLvl || selectedLvl === checkLVL) ? 'btn-success' : 'btn-light';
    case levels[1]:
      return (!selectedLvl || selectedLvl === checkLVL) ? 'btn-warning' : 'btn-light';
    case levels[2]:
      return (!selectedLvl || selectedLvl === checkLVL) ? 'btn-danger' : 'btn-light';
    default:
      return 'btn-secondary';
  }
}

export function getLevelIfCheckLvlIsNotSelectedLvl(checkLVL: string, selectedLvl: string, levels: string[]) {
  switch (checkLVL) {
    case levels[0]:
      return selectedLvl !== checkLVL ? checkLVL : null;
    case levels[1]:
      return selectedLvl !== checkLVL ? checkLVL : null;
    case levels[2]:
      return selectedLvl !== checkLVL ? checkLVL : null;
    default:
      return selectedLvl !== checkLVL ? checkLVL : null;
  }
}
