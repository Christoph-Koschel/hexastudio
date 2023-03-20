next build
next export

$OUT_DIR = "./out"

Copy-Item "./.htaccess" $OUT_DIR

Get-ChildItem $OUT_DIR -File -Filter *.html |
        ForEach-Object {
            $NAME = $_.Name;
            if ($NAME -ne "index.html")
            {
                $NEW = [IO.Path]::ChangeExtension("$NAME", [NullString]::Value).TrimEnd('.');
                Rename-Item "$OUT_DIR/$NAME" $NEW
            }
        }
