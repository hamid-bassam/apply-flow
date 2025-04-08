/* eslint-disable @typescript-eslint/no-unused-vars */
import { Eye, SquareSplitHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Switch } from '../../../components/ui/switch';
import { useLayoutStore } from '../../../features/live-session/store/LayoutStore';


export type NotesPanelProps = {
  notes?: string;
};
// const dockItems = [
//   { title: "Q&A", icon: <MessageSquare className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#qa" },
//   { title: "Script", icon: <Brain className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#script" },
//   { title: "Mots-clés", icon: <Key className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#keywords" },
//   { title: "Recruteur", icon: <UserCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#recruiter" },
//   { title: "Questions", icon: <HelpCircle className="h-5 w-5 text-secondary-foreground hover:text-secondary" />, href: "#questions" },
// ];


export const NotesPanel = (props: NotesPanelProps) => {

  const [notes, setNotes] = useState('');
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isRightAligned, setIsRightAligned] = useState(false);
  return (
    <div className="h-full flex flex-col pt-3 ">

      {/* alignement */}
      <div className="flex  items-center justify-end gap-2 px-4 pt-2 pb-3">
        <div className="flex items-center gap-1">
          <SquareSplitHorizontal className="h-4 w-4" />
          {/* <span className="text-sm">Alignement</span> */}
          <Switch checked={isRightAligned} onCheckedChange={(checked) => {

            setIsRightAligned(checked);
            useLayoutStore.getState().movePanel('panel-2', checked ? 2 : 1);
          }
          }
          />
        </div>
        {/* focus */}
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <Switch checked={isFocusMode} onCheckedChange={setIsFocusMode} />
        </div>
      </div>
      <aside className="h-full p-4 flex flex-col ">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Prends tes notes ici (IA bientôt disponible...)"
          className="w-full flex-grow p-4 bg-primary/20 rounded-lg resize-none text-sm focus:outline-none focus:ring-1 focus:ring-primary "
        />
        <button className="w-full mt-4 p-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          Enregistrer les notes
        </button>
      </aside>
    </div>
  );
};
